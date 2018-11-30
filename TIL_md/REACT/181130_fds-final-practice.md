# 181130 마지막 실습 메모2

## 경로

pushState로 주소를 강제로 갱신할 수 있었다. React에서는 history객체의 push, replace메소드를 통해 갱신할 수 있다.

```js
history.push("/"); // 루트 경로로 사이트 갱신
```

history prop을 넘겨받기 위해서는 withRouter hoc로 `container component`를 둘러준다.

### 경로를 표시할 땐 다음과 같이 한다.

- 모양과 책임이 같은 경우는 경로를 같도록 라우팅한다.
- 경로는 계층 구조를 나타내는 것이기 때문에 데이터를 경로로 나타내려고 하면 안된다.
- 경로는 page, 쿼리스트링은 데이터(필터) => 여러 자식을 가지게 하는것이 좋기 때문이다.

---

## 상태를 초기화

- 라이프사이클을 사용하는 것은 bad pattern 이다.
- 상태를 초기화 할 때는 key를 바꾸는 것을 권장하고, key를 바꿔 상태를 초기화 하게 되면 쓸데없는 초기화를 막을 수 있다.

### 주소가 바뀌는 사이트를 만들 때 주의할 점

React 개발 서버는 어떤 경로로 접속하더라도 React앱을 응답하도록 서비스한다. netlify 등의 다른 서버는 그냥 파일을 제공하는 역할만 하기 때문에 루트경로 이 외의 다른 주소로 들어가는 경우 404 status가 뜬다.

Support for client-side routing:

아래같이 하면 어떤 경로로 들어오더라도 리액트 앱을 보여주라는 뜻이다. 세세한 설정도 가능하다.

public/\_redirects 파일

```js
/*  /index.html  200
```

---

## 이미지

- 경로를 import할 수 있다.
- `data URI`: 10,000byte 이상의 이미지의 주소에 파일의 이름을 담는다. (bmp, gif, jpg, jpeg, and png) => 요청 횟수를 줄일 수 있다.

예제 React.js

```js
import React from "react";
import logo from "./logo.png"; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

예제 css

```css
.Logo {
  background-image: url(./logo.png);
}
```

svg 파일은 html과 비슷하게 생긴 문서이다. svg파일은 react component로 쓸 수 있다.

```js
import { ReactComponent as Logo } from "./logo.svg";
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```
