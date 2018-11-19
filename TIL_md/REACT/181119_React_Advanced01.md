# 181119 TIL React Advanced 

## JSX 더 알아보기

JSX문법은 createElement로 렌더링되며, 반홥값은 객체이다.

### React 엘리먼트의 타입 지정하기

JSX 태그의 첫 부분은 React 엘리먼트의 타입을 결정한다. 대문자로 시작하는 타입은 해당 JSX 태그가 React 컴포넌트임을 가리킨다. 또한 같은 스코프 내에 존재해야 참조할 수 있다.

대문자 타입을 컴파일 할 때,
```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

소문자일때,
```js
React.createElement(
  'div',
  {className: 'sidebar'},
  null
)
```

정리하자면, 사용자 지정 컴포넌트 요소는 대문자, 내장 컴포넌트 요소는 소문자로 작성해야 한다.

### React가 스코프 안에 있어야한다.

JSX는 React.createElement를 호출하는 코드로 컴파일되기 때문에, React 라이브러리가 JSX 코드의 스코프 안에 항상 존재해야만 한다.

```js
import React from 'react';
```

### 진리값, null, undefined는 기리지 않는다.

다만, false는 무시하지만 falsy(0, '')는 무시하지 않는다.

---

## 정적 타입 체크

1년 뒤에 어떤 것을 공부해야하는지..? 많이 쓰이는 기술로 이런 세계가 있는 것을 인지해야하고, 학습해야한다.

- 동적 타이핑 언어(`Javascript`, `Ruby`, `Python`) : 실행시간에 타입 검사. 실행 전에는 타입 관련 버그를 확인하기 어렵다.

> 에를 들어 string으로 정의된 값에 push메소드를 사용할 수 없는데, 이 것이 에러가 나려면 실행해서 확인해야한다.

- 정적 타이핑 언어(`Java`, `C`, `C++`, `C#`, `Kotlin`, `Swift`) : **실행하기 전 컴파일 과정에서 타입 검사**를 한다. (코드를 분석해서 실행 전에 타입 관련 버그를 잡는다.) 매개변수 등의 타입을 체크하기 어렵기 때문에 정적 타입 체크를 하는 것이 좋다. 

    Javascript에 컴파일 과정 중 '타입 체크'를 하는 기능을 추가한 확장 언어들이 있다. (`TypeScript`, `Flow`) 이 확장 언어들은 변수, 속성 값 등이 어떤 타입을 가져야하는지 미리 설정해야한다. 

    > TypeScript는 언어 뿐만 아니라 컴파일러도 모두 통틀어서 그 이름을 지칭하며, Flow도 마찬가지다.

---

## Ref 와 DOM

> 복습: ref속성은 속성으로 넘겨줄 수 없다. (ref: 참조)

`React.createRef()`: 객체를 상성하며 DOM노드(객체)를 가져올 수 있다(접근 할 수 있다). 생성자에 선언한다.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### Ref 사용하기

한번 연결시킨 뒤에는 `current`라는 속성을 이용해서 연결된 DOM노드를 가져올 수 있다. (DOM객체를 가리키는 화살표)

```js
const node = this.myRef.current;
```


