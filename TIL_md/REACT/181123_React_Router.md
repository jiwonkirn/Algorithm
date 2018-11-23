# 181121 TIL React Router

## 브라우저 히스토리 조작하기

[브라우저 히스토리 조작하기 MDN](https://developer.mozilla.org/ko/docs/Web/API/History_API)

- SPA(Single Page App): 페이지 하나에서 모든 것을 하는 Appliication

### pushState() 

`pushState()`는 주소 표시줄의 주소를 바꿔준다. 뒤로가기 버튼을 누르면 전의 경로로 돌아간다.

- 뒤로가기와 앞으로가기는 각자의 히스토리 스택을 가지고 있다. 때문에 뒤로가기를 누르면 앞으로가기 스택에 데이터가 쌓인다.

`location.search`는 쿼리스트링을 통째로 가져온다. 이를 이용해서 다음과 같이 가능하다.

```js
// 경로 예시: https://github.com/users?username=김지원
console.log(window.location.search) // "?username=김지원"
const a = new URLSearchParams(window.location.search)
a.get('username') // '김지원'
```

## React Router

리엑트 라우터는 주소 표시줄의 상태를 다루는 것이다.

- React Router DOM: 웹에서 사용하는 리액트 라우터 

### <BrowserRouter />, <HashRouter />

Context API의 Provider와 유사한 역할을 한다.
- BrowserRouter의 경우 브라우저의 popstate 이벤트와 연동되어 있다.
- HashRouter의 경우 브라우저의 hashchange 이벤트와 연동되어있다.

```js
// 모두 컴포넌트를 불러오는 것이다. Router는 provider같은 역할을 하고, Route와 Link는 consumer같은 역할을 한다.
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

### <Link />

- a 태그로 렌더링되는 컴포넌트. 클릭했을 때 주소 표시줄의 상태를 바꾸고, 페이지 전환을 일으킨다.
- href 역할을 하는 to prop을 통해 어떤 주소로 이동할지를 지정해줄 수 있다.
- 상위에서 BrowserRouter가 사용되면 history.pushState를 통해 주소를 바꾸고, HashRouter가 사용되면 location.hash를 바꾼다.

아래 Link 태그는 a태그로 렌더링된다. 페이지가 넘어가는 동작을 취소하고(preventDefault) pushState를 하는 역할을 한다.

```js
<Link to="/">Home</Link>
```

> a태그로 렌더링 하는 이유는 '새 탭에서 열기' 라는 기능은 a태그에 의해서만 동작하는 기능이기 때문이다.

### <Route />

- Route 컴포넌트는 react-router의 핵심적인 구성요소로, 주소에 따른 선택적 렌더링을 할 때 사용된다.
- path prop과 주소가 일치할 때에만 렌더링된다.
- component, render, children prop을 통해 무엇을 렌더링할지 지정해줄 수 있다.
  - component prop에는 렌더링하고 싶은 컴포넌트를 넘겨줄 수 있다. 이 때, 여기에 주어진 컴포넌트는 라우팅과 관련된 여러 prop을 받는다. (match, location, history)

```js
  <Route exact path="/" component={Home} /> // '/' 경로이면 Home 컴포넌트를 그린다.
  <Route path="/about" component={About} /> // '/about' 경로이면 About 컴포넌트를 그린다.
  <Route path="/topics" component={Topics} /> // Topic 컴포넌트에 리액트 라우터와 관련된 props 이 들어가서 받아 쓸 수 있게 해준다.
```

```js
  <Route path={`${match.path}/:topicId`} component={Topic} /> // :topicId은 match.params.topicId에 들어간다.
  // ...
  <h3>{match.params.topicId}</h3>
```

### <Redirect />

- 렌더링되었을때(화면을 그리기만 해도) 주소가 바뀌는 컴포넌트. Link 컴포넌트와 함께 주소를 바꾸는 데에 사용된다.- 
- Link 컴포넌트는 사용자가 링크를 클릭해야만 주소가 바뀌는 데 반해, Redirect 컴포넌트는 마운트되는 순간 주소가 바뀐다는 차이점이 있다.

> 사용자가 링크를 클릭하지 않더라도 페이지를 바꿔줘야 할 때

