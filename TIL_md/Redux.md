# Redux (20181210)

Redux는 상태 관리 라이브러리이다. 2018년에 Context API가 공개로 전환되기 전에는 Redux를 사용했다. Redux는 Context기능, 고급 상태관리 기법 두가지를 포함하고 있는데, 고급 상태관리 기법이 필요한 경우 Redux를 사용한다.

> Store, action, dispatch, subscribe, reducer를 이해하는 것이 오늘의 목표이다.

## 값

무언가를 값으로 다루는 것은 아주 편리한 기능이다. (제너레이터, 프로미스) Redux는 '상태변화'를 값으로 표현한다.

- 상태 변화가 값이기 때문에 로깅하기 쉽다.
- Undo / Redo 하기가 쉬워진다: 상태 변화가 값이기 때문에 그 값을 스택에 쌓아 Undo / Redo를 쉽게 할 수 있다.
- 시간여행: 상태 변화를 값으로 바꾼 것을 스택에 쌓았다면, 그 스택의 어떤 시점으로 돌아갈 수 있다.(git의 commit이랑 비슷하다.)

## Store, action, dispatch, subscribe, reducer

`Store`는 여러 기능을 갖추고 있는 상태 저장소이다.

- 값을 투입하면 상태가 바뀐다.
- 상태변화를 나타내는 값(객체)를 action이라고 한다.
- action을 store에 넣는 행동을 dispatch라고 한다. (action을 store에 dispatch한다.)
- action을 dispatch할 때 마다 화면을 다시 그린다.(setState할 때 마다)
- subscride: store에서 상태가 바뀔때마다 실행할 함수를 등록하는 절차, EventListenr와 비슷한 역할을 한다고도 볼 수 있고, 상태를 바꾸는 함수를 정의한다. (ex: Store.subscribe)
- reducer: 이전 상태와 action을 매개변수로 받아서 다음 상태를 반환하는 함수. 다음 상태를 반환하면 Store 안에 있는 state에 저장한다.

> 정리하자면, 처음에 Store를 만들 때 reducer를 포함해서 만든다. action이 Store에 dispatch되면 Store는 이전 상태와 action을 받아 Store에 다음 상태를 저장한다. Subscribe에 설정된 함수를 통해 특정 상태가 변하면 setState를 한다.

## 불변성

내용이 바뀌면 참조 역시 바뀌는 것을 '불변성'이라고 하는데, 내용이 바뀜을 쉽게 접근 할 수 있기 때문에 이용한다. **Redux에서는 불변성을 꼭 지켜줘야 한다.**(ex: 원본 state에 push 메소드 사용 X)

## Single Source of Truth

redux는 하나의 Store를 같는 것이 좋다. 때문에 하나의 store에 여러 reducer를 하나의 reducer로 바꿔주어야 한다.

```js
function rootReducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action), //
    todo: todoReducer(state.todos, action)
  };
}

const store = createStore(rootReducer);
```

## React에 연결하기

React와 Redux를 연결하는 라이브러리를 깔아야 한다. (React Redux)

[실습예제](https://codesandbox.io/s/l9334949jz)

duck 기법

- 장점: 쓰기 편리하다
- 단점: 확장성이 떨어진다.

리듀서, 액션 끼리 묶기

- 장접: 쓰기 어렵다.
- 단점: 확장성이 좋다.

## Redux의 단점

- 사람이 관례로 해결하는 부분이 많다. => 자동으로 해결해주는 라이브러리(MobX)
- 모든 상태가 하나의 스토어 안에 저장된다는 것은 프로젝트 규모가 커질수록 관리하기 어려워진다.
- 큰 상태트리가 생긴다: 상태가 하나만 바뀌어도 모든 화면이 다시 그려진다. 때문에 connect를 사용하면 purecomponent처럼 동작하게 하여 최적화가 되어있다. 하지만 reducer를 모두 실행해야 하는 부하는 여전히 존재한다.

  > 아주 빠르게 동작하는 부분에서 dispatch를 하는 것은 절대 해서는 안된다. 예를 들어 scroll이벤트가 있는데, 이런 자주 변경되는 상태는 react에 저장해야 한다.

- purecomponent는 불변성을 사용한다. 때문에 redux로 코딩할 때는 **반드시 불변성을 지켜야한다.** (immer)