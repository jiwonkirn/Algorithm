# DOM API

## 이론

- DOM 에서는 HTML의 태그는 모두 객체이다.

- 사용자로부터 입력받은 텍스트를 innerHTML에 대입해서는 **절대로 안된다.**
=> Cross-site Scripting (XSS) 해킹 이슈가 발생할 수 있다. 그러므로 **`textContent`를 사용하도록 한다.**

- html 의 `required` 같은 단독 속성들을 `boolean attribute`라고 한다.

- `disabled` => 선택조차 못하게 하는 `boolean attribute`

---

## 문법에 대한 내용

아래와 같이 함수명을 넣어도 실행된다.

```js
function popup(){
  alert('버튼이 출력되었습니다.')
}

document.querySelector('.attach').addEventListener('click', e => {
  documnet.querySelector('.listener-target').addEventListener('click', popup) // popup함수가 저런식으로 콜백이 된다.
})
```

다음은 html의 요소를 만드는 Dom 메소드이지만 html 문서에 삽입하지는 않는다.

```js
document.createElement('div') // <div></div>
```

다음 코드는 appendChild랑 똑같이 동작한다.

```js
formEl.insertBefore(divEl2, null)
```

`appendChild`나 `insertBefore`는 이미 문서안에 존재하는 요소 객체를 조작하면 **이동**을 시키지 **복사**를 하지 않는다. **때문에 요소의 위치를 이동시킬 때에도 사용된다.**

`El.getBoundingClientRect().x`, `El.getBoundingClientRect().y`는 익스플러어에서 읽지 못한다.

이벤트 전파 : 이벤트가 들어올 때는 capture, 나갈 때는 bubbling이라고 하는데, bubbling단계에서 마우스 이벤트가 실행된다.
이 때, 마우스로 리프 요소를 클릭했을 때 리프 요소의 부모요소, 부모요소의 부모요소 등 bubbling 할 때 전부 마우스 이벤트가 실행된다.
하지만 아래와 같이 콜백 마지막에 `true`를 입력하면 capture 단계에서 출력된다.

버블링이 일어나는 이벤트도 있고, 일어나지 않는 이벤트도 있다.

설정을 따로 하지 않으면 `button` -> `inner` -> `outer` 순서대로 마우스 이벤트가 진행된다.

```js
document.querySelector('.outer').addEventListener('click', e => {
  alert('outer가 클릭되었습니다.');
}); // true를 입력하므로써 capture단계에서 출력

document.querySelector('.inner').addEventListener('click', e => {
  alert('inner가 클릭되었습니다.');
  // alert('target의 class:' + e.target.getAttribute('class'));
  // alert('currentTarget의 class:' + e.currentTarget.getAttribute('class'));
});

document.querySelector('button').addEventListener('click', e => {
  alert('버튼이 클릭되었습니다.');
  // alert('target의 class:' + e.target.getAttribute('class'));
  // alert('currentTarget의 class:' + e.currentTarget.getAttribute('class'));
});
```

아래의 경우 `outer` -> `inner` -> `button` 순으로 마우스이벤트가 실행된다.

```js
document.querySelector('.outer').addEventListener('click', e => {
  alert('outer가 클릭되었습니다.');
}, true); // true를 입력하므로써 capture단계에서 출력

document.querySelector('.inner').addEventListener('click', e => {
  alert('inner가 클릭되었습니다.');
  // alert('target의 class:' + e.target.getAttribute('class'));
  // alert('currentTarget의 class:' + e.currentTarget.getAttribute('class'));
}, true);

document.querySelector('button').addEventListener('click', e => {
  alert('버튼이 클릭되었습니다.');
  // alert('target의 class:' + e.target.getAttribute('class'));
  // alert('currentTarget의 class:' + e.currentTarget.getAttribute('class'));
}, true);
```

이벤트의 실제 요소와 이벤트리스너가 등록된 요소는 다를 수 있다. 정확히 어떤 것을 지정해야 하는지에 따라 실제로 어디서 실행됐는지 알 필요가 있다.

```js
e.target // 실제로 이벤트를 일으킨 요소
e.currentTarget // 이벤트 전파 과정 중 현재 이벤트가 위치한 요소 (이벤트 리스너를 실행시킨 요소)
e.target.value // 이벤트를 을으킨 요소의 값
```

### 폼 이벤트

- change : 보통 체크박스에서 체크나 헤제를 함으로써 변경되었을 때 사용.

### https://httpbin.org/post

`action`에 https://httpbin.org/post 주소를 넣으면 해당 주소에 전송이 되고, 테스트용도로 쓰인다.

### button

`form` 태그 안에 있는 버튼은 `submit` 타입을 지정하지 않아도 `form`태그 안에 있는 내용이 전송된다.

`button` 의 `tpye`

- `submit` : 내용을 제출한다. (defalut)

- `reset` : 값을 기본값으로 초기화한다. (textarea의 값이 초기값)

- `button`

```html
<button type="submit">전송</button>
<button type="reset">초기화</button>
```

요즘은 `form`태그의 전송기능을 잘 사용하지 않는다. 하지만 다른 기능들이 유용하기 때문에 `form`태그를 사용한다.

DOM에서 input태그 지정

```js
  const elements = e.target.elements;
  elements.id.value
  // name에 'id'라고 적혀있기 때문에 해당 input태그를 불러온다.
  // elements는 input태그에서만 사용한다.
```

[`input`태그를 이용한 할 일 만들기](https://codepen.io/jiwonkirn/pen/wYPLdG)

### mouseover/mouseout, mouseenter/mouseleave

`mouseover` / `mouseout` 이벤트는 버블링이 일어나기 때문에 자식요소를 오버해도 부모요소의 리스너가 실행된다.

`mouseover` / `mouseout` 이벤트는 버블링이 일어나지 않기 때문에 자식요소를 오버하면 자식요소만, 부모요소를 오버하면 부모요소만 이벤트를 발생킨다.

### 화면을 보였다 안보였다 하는 방법

- 화면에 새로운 요소를 insert, append 같은 방법으로 넣는 방법

  실제로 몇 개의 요소를 표시, 생성해야 할지 모르는 경우 사용한다.

- 스타일을 다르게 넣어서 쓰는 방법

  실제로 몇 개의 요소를 표시하고자 하는 것을 아는 경우, 단순한 경우

---

## 실습

[할일 만들기](https://codepen.io/jiwonkirn/pen/LgzooX)

