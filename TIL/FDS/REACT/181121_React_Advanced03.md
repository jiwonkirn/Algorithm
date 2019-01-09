# 181121 TIL React Advanced 

## Context

앱의 여러부분에서 정보를 공유해야 할 때 사용된다.

`React.createContext('')`: context 객체를 생성한다.

```js
const {Provider, Consumer} = React.createContext(defaultValue); // Provuder와 Consumer 컴ㅍ넌트 (객체)를 만든다.
```

> 같은 식별자로 정의된 값만 받을 수 있다.

Provider의 자손인 모든 Consumer는 Provider의 value prop이 바뀔 때마다 다시 렌더링된다. 이는 shouldComponentUpdate의 영향을 받지 않으므로, 조상 컴포넌트의 업데이트가 무시된 경우라 할지라도 Consumer는 업데이트될 수 있다. (provider의 값이 변하면 pureComponent에 중간 컴포넌트의 업테이트가 막혀도 consumer 컴포넌트는 업데이트(렌더링) 된다.)

> 예를 들어 내 사용자 정보는 앱 전반에 걸쳐서 사용되어야 하는 정보이다. 그런 정보를 컨트롤 할 때 context를 쓴다.

---

## fragment

### 짧은 구문

`<></>`문법은 `React.Fragment` 대신 사용할 수 있지만 babel 7 이상 버젼에서만 지원된다. `React.Fragment`는 `key`를 쓸 수 있다.

```js
class Columns extends React.Component {
  render() {
    return (
      <> 
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

---

## Portals

부모 컴포넌트의 DOM 계층 외부에 존재하는 DOM 노드로 자식에 렌더링하는 일급 방법을 제공한다. (쉽게 말해, root 밖에도 div.portal을 그릴 수 있다.)

[예제 코드](https://codepen.io/gaearon/pen/yzMaBd?editors=1010)

> 보통 모달 라이브러리, 툴팁 라이브러리를 사용하는 경우가 많은데, 그 안에 portal 기능이 내장되어있다.


### 이벤트 버블링

리액트는 자체적으로 이벤트 시스템을 가지는데, root에 이벤트리스너를 모두 등록해 놓고 재활용하는 식으로 동작한다.

때문에 리액트에서는 portal이 실제로는 root 바깥에 있어 보여도, 리액트 트리에서 조상이기 때문에 이벤트 버블링이 일어난다. 

- 이 함수의 사용법 => 추상 (자동차의 기어, 핸들 등)
- 속에 들어있는 것들 => 구상 (자동차의 엔진, 배터리 등)

리액트는 추상만 가지고 개발을 할 수 있게 해준다. 즉, 그 멐포넌트가 정확히 어떻게 구현되었는지와는 상관없이 포탈은 이벤트를 캡쳐할 수 있다.

> 역할과 책임을 잘 나눠야 구상이 잘 된 설계이다. 다른 구상에 대해서는 추상적인 부분만 알 수 있어야한다. 즉, 로그인 요청을 보내는 역할을 하는 함수가 인수를 받을 때, 그 인수가 form으로 온 것인지, prompt에서 온 것인지를 알 필요는 없다. 때문에 정보를 받는 영역, 정보를 요철 보내거나 요청 받는 영역의 분업화가 잘 되어야 유지보수, 가독성 등 여러가지 측면에서  유리하다.