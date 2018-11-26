# CSS 방법론

BEM은 기존의 css 방식을 따르기 때문에 진입장벽이나 익숙함 대해 장점이 있다. CSS Module은 더욱 추천되지만 최근 나온 문법이라 학습이 필요하다.

## BEM(Block Element Modifier)

- Block: element를 담고 있는 컨테이너

- Element: block 안에서 특정 기능을 수행하는 컴포넌트, 이름이 길 경우 하이픈으로 연결한다.

```css
.header__logo { … }
.header__menu { … }
.header__search { … }
.header__login { … }
```

- Modifiers: Modifier은 block 또는 element의 속성(상태)이다. block 또는 element의 외관이나 상태를 변화시킨다. '--'으로 modifier를 작성한다.

```css
.block‐‐modifier {…}
.block__element--modifier {…}
```

## Sass

### 변수

변수를 담을 수 있다.

```css
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

### 네스팅

스코프를 가질 수 있다.

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

- 코드량을 줄일 수 있다.

css는 자기선택자라는 기능이 있다. `&`를 붙여주면 해당 스코프 자신을 선택한다. 부모-자식의 관계가 아닌, `.PostList__title`이 된다.

```scss
.PostList {
  &__title { // &는 .PostList와 같다. 이를 자기 선택자라 한다.
    color: teal;
  }
}
```

아래처럼도 작성 가능하다.

```scss
.option {
  body.loading & { // loading 클래스를 가진 body태그 안에 있는 자기 자신
    color: blue;
  }
}
```

### Import

css는 import했을 때 속도가 느려진다. 여러 파일에서 공유해야하는 변수는 import하서 불러오도록 한다.

### Mixins

공유하고 싶은 코드뭉치를 mixin으로 묶어서 사용할 수 있다.

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box { @include transform(rotate(30deg)); } // rotate부분이 인수로 $property에 들어간다. @mixin에서는 함수처럼 동작한다.
```

class명에는 그 역할과 책임만 명확히 부여하고, mixin에는 스타일에 대한 이름을 묶어서 넣는다. 정리하자면 class명을 더럽히지 말자.

> TIP: 모바일 버젼부터 작업하는 것이 편하다 (Mobile first)

### Operators

연산을 calc 없이 사용할 수 있다.

```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

> 여러 파일에서 공유되어야 하는 스타일이 있다면 index.js에 import한 commom.scss에서 관리하고, 나머지는 각자 컴포넌트이름과 같은 scss파일을 만들어서 각자의 스타일을 먹인다.

> styled component는 js에서 스타일을 먹일 수 있다.

---

## CSS Modules

원래는 그 이전에서도 널리 사용되던 방식이지만 React 2.0에 와서야 정식으로 추가됐다. CSS Module은 유일하고 식별가능한 방식을 자동으로 해준다. 즉 이름충돌을 걱정할 필요 없이 여러 파일에서 같은 클래스 이름을 사용할 수 있다.

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // Import css modules stylesheet as styles
import './another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return <button className={styles.error}>Error Button</button>;
  }
}
```

```html
<!-- This button has red background but not red text -->
<button class="Button_error_ax7yz"></div>
```

위의 style 이라는 객체 안에는 `.error`안에 `Button_error_ax7yz`가 저장되고, css에서는 `Button_error_ax7yz`클래스가 적용되어 작성한 `.error`의 스타일이 적용된다. 때문에 클래스이름 충돌을 막을 수 있다.

> CSS MODULE을 사용할 때는 '-'이 들어가면 객체 접근시에 대괄호 표기법을 사용해야하기 때ㅜㄴ에, camelCase를 사용하도록 한다.