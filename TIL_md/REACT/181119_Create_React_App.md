# 181119 TIL Create React App

## npx

`npx`: 다운 받고 실행까지 시켜준다. 매번 최신버전을 다운받아준다.

> `-g`: npm의 전역저장소에 저장을 하여 어디에서나 사용할 수 있게 해준다.

## index.js

`serviceWorker`: cache 와 관련된 모듈이다.

> 쇼핑몰때 쓰던 빌드 도구는 pacsel, create-react-app은 webpackdlek.

## create-react-app

- `src` 폴더 안에 있는 파일들은 transfiling(옛날 문법으로)나, 압축 등의 변환과정을 친다.
- `public` 은 그대로 올라간다.

기본적으로 IE 9,10,11 에서는 동작하지 않는다. 때문에 아래 폴리필을 사용한다. [polyfill 주소](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)

### 최신 문법 지원

다음과 같은 최신 문법 기능은 사용할 수 있다.

- Exponentiation Operator (ES2016).
- Async/await (ES2017).
- Object Rest/Spread Properties (ES2018).
- Dynamic import() (stage 3 proposal)
- Class Fields and Static Properties (part of stage 3 proposal).
- JSX, Flow and TypeScript. (설정해야함)

> 표준이 됐다와 브라우저에서 쓸 수 있다는 말은 다른말이다. 

### Adding a Stylesheet

CSS를 자바스크립트에서 import한 뒤, 클래스를 주어 스타일링할 수 있다.

```css
.Button {
  padding: 20px;
}
```

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

아래 키워드도 궁금하면 찾아보도록 한다.

- DataaUrl: -

- base64: 01010101...의 정보 방식을 텍스트로 바꾸는 인코딩 방법. (text밖에 못 담는 경우 이 것을 사용한다.)

### ES7 React/Redux/GraphQL/React-Native snippets

react emmet,
[React Snippet](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

`rcc` + enter를 하면 컴포넌트 작성하기 쉽게 코드를 만들어준다.
`rconst` + enter를 하면 constructor를 쉽게 만들어준다.
`api` + enter 하면 export default 된 모듈을 자동으로 import가 된다. (파일명이어야한다.)

### React.Fragment

아무 의미도 없는 태그로 감싸주어 반환하고 싶을 때는 React.Fragment로 감싸준다.

> `react-create-app` v2.0 이사을 사용하면 <></> 로 감싸줄 수 있다.

### componentDidMount

동기인지 비동기인지에 상관 없이 일단 화면을 띄우고(빈 post를 띄우고), setState가 일어나서 한번 더 그려진다.