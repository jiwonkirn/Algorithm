# DOM API

## 이론

- DOM 에서는 HTML의 태그는 모두 객체이다.

- 사용자로부터 입력받은 텍스트를 innerHTML에 대입해서는 **절대로 안된다.**
=> Cross-site Scripting (XSS) 해킹 이슈가 발생할 수 있다. 그러므로 **`textContent`를 사용하도록 한다.**

- html 의 `required` 같은 단독 속성들을 `boolean attribute`라고 한다.

- `disabled` => 선택조차 못하게 하는 `boolean attribute`


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

---

## 실습

[할일 만들기](https://codepen.io/jiwonkirn/pen/LgzooX)



