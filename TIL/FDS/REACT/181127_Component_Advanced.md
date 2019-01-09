# 181126 TIL 컴포넌트 더 잘 활용하기

1. Props
2. storybook
3. 구현 세부사항
4. withLoading HOC

## Props

### defaultProps

`defaultProps`에 prop이 기본값을 지정할 수 있다.

```js
CustomButton.defaultProps = {
  color: "blue" // CustomButton컴포넌트의 color 속성 기본값은 'blue'
};
```

위의 코드는 컴포넌트 바깥에서 작성되지만 클래스필드와 정적속성으로 정의하면 내부에 작성할 수 있다.

```js
static defaultProps = {
    editing: false
  }
```

### PropTypes

개발과정에서 props에 잘못된 prop이 들어왔을때 에러를 내는 라이브러리이다. 하지만 정적 타입 체크를 해주는 확장언어인 TypeScript가 널리 사용되기 때문에 잘 사용하지 않는다.

[코드예제 링크](https://reactjs-org-ko.netlify.com/docs/typechecking-with-proptypes.html#proptypes)

[주석을 개발문서로 만들어주는 라이브러리](https://react-styleguidist.js.org/): 실무에서 storybook 대신 사용되기도 하지만 학습하는데 시간이 든다.

> (파이널 프로젝트에서 사용하도록 한다.)

---

## storybook

### action

StoryBook에서 action 속성은 함수를 인수로 받고, 그대로 반환한다. 즉 테스트용 함수를 쉽게 만들 수 있다.

`<PostForm onSubmit={action('onSubmit')} />`

> submit 이벤트같은 경우 preventDefault로 기본 동작을 막아야한다.

### LinkTo

똑같이 함수를 반환하는 함수이지만, 스토리북의 다른 페이지로 넘어가게할 수 있다.

`<PostForm onSubmit={LinkTo('PostDetailView')} />`

---

## 구현 세부사항

어떤 코드를 사용하는 쪽에서는 그 코드의 **구현 세부사항**을 모른채여도 쓸 수 있어야 좋은 상황이다. 예를 들어 아래 코드는 이벤트 객체를 인수로 바로 받지 않기 때문에 넘겨받는 컴포넌트는 구현 세부사항을 알지 못한다. 예를 들면 presentational 컴포넌트에서 prop으로 submit이벤트를 받았다 치면, 인수로 이벤트 개게를 바로 넘겨주는 것이 아니라 필요한 인수를 직접 넘겨준다.

```js
// presentational component (Form)
onSubmit={e => {
          e.preventDefault()
          const title = e.target.elements.title.value
          const body = e.target.elements.body.value
          this.props.onSubmit(title, body)
          }

// container component (EditForm)
onSubmit={(title, body) => this.handleSubmit(title, body)}

async handleSubmit(title, body) {
    const {postId} = this.props
    await api.patch(`/posts/${postId}`, {
      title,
      body
    })
    // ...
}
```

> '구현 세부사항이라는 단어는 자주 나오니 알아두도록 한다.'

---

## withLoading HOC

페이지 전체에서 로딩인디케이터를 사용하면 사용자가 답답함을 느낀다. 때문에 특정 부분만 로딩 인디케이터를 사용하는 방법이 많이 사용된다.

```js
export default function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    // HOC에만 관심있어하는 prop를 따로 빼고 나머지릏 넘겨준다.
    const {loading, ...rest} = props
    if (loading) {
      return <div>loading...</div>
    } else {
      return <WrappedComponent {...rest} />
    }
  }
}

// 다른 파일에서..
export default withLoading(Component)
```

---

## Storybook에 css적용하기

Entry Point: 의존성 분석을 **시작**하는 파일, 웹사이트의 Entry Point는 index.js이고 storybook에서는 `.congid.js`이다. enntry point가 다르기 때문에 storybook에서는 스타일을 불러올 수 없다.

의존성 분석 순서 config.js => ...stories.js => js

때문에 config.js 상단에 다음과 같이 추가한다.

```js
import "../src/index.scss"; // 스타일
// import {Form} from 'semantic-ui-react'
```

---
