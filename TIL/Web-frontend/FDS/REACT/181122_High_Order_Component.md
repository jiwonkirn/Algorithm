# 181121 TIL High Order Component

## 고차 컴포넌트

고차 컴포넌트는 컴포넌트로 쓸 수 없다. (컴포넌트는 함수나 클래스를 통해 React엘리먼트를 반환한다.)

### 횡단 관심사(Cross-Cutting Concerns)를 위해 HOC 사용하기

- 횡단 관심사: 여러 페이지에 구현되어야 하는 공통된 기능

### 고차 컴포넌트 잘 활용하기 

관례: 함수의 합성을 최대한 활용하도록 한다.

- `connect`는 고차컴포넌트를 반환하는 함수이다.

```js
const ConnectedComment = connect(commentSelector, commentActions)(CommentList); // 고차컴포넌트를 반환한 뒤, CommentList를 인수로 주어 실행시킨다.
```

```js
// Instead of doing this...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... you can use a function composition utility
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
const enhance = compose(
  // These are both single-argument HOCs
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```

### render 메소드 안에서 HOC를 사용하면 절대 안된다.

렌더 메소드가 실행될 때 마다 새로운 컴포넌트를 새로 그리는데, 그러면 상태를 항상 날려버린다.

### ref는 전달되지 않는다.

넘겨주고 싶다면 innerRef라는 이름처럼 이름을 바꿔서 내려준다.