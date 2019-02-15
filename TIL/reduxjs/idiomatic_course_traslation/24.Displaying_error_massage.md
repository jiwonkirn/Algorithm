# 24. Displaying Error Messages (에러 메세지 띄우기)

Sometimes API requests fail, and we will simulate this by throwing inside the fake API client so that it returns a rejected Promise. If we run the app, the loading indicator gets stuck because the isFetching flag get set to true, but there is no corresponding receiveTodos action to set it back to false again.

때때로 API 요청은 실패하기 때문에 가짜 API 클라이언트 내부에서 rejected Promise를 반환하도록 흉내낼 것입니다. app을 실행시키면, `isFetching`플래그가 `true`로 설정되기 때문에 로딩 표시가 고착됩니다. 하지만 이를 다시 `false`로 바꿔주기 위한 `reciveTodos` 액션이 없습니다.

---

### 고쳐봅시다.

우선은 액션 크리에이터 파일인 `action/index.js`를 정리하는 것 부터 시작할 것입니다.

`requestTodos`액션은 `fetchTodos` 밖에서 사용되지 않습니다. 때문에 `requestTodos` 객체 리터럴 자체를 `fetchTodos`안에 넣을 수 있습니다.
응답을 받고 `dispatch`되는 곳에 인자로 넣어줍니다. 또한, `Promise.then`메소드는 거절된 요청에 대한 핸들러를 두번째 인수로 넣을 수 있습니다.

#### fetchTodos 내부

```js
return api.fetchTodos(filter).then(
  response => {
    dispatch({
      type: "RECEIVE_TODOS",
      filter,
      response
    });
  },
  error => {
    // To be filled in
  }
);
```

---

### 명확함을 위한 action 이름 바꾸기

`fetchTodos` 액션 크리에이터는 몇몇 액션을 디스패치하기 때문에 좀 더 일관성있게 이름을 바꿀 것입니다.

- 할 일 목록을 가져오는 경우를 위해 `'REQUEST_TODOS'` 는 `'FETCH_TODOS_REQUEST'` 로 바꿉니다.
- 할 일 목록을 성공적으로 가져옴을 나타내는 액션이기 때문에 `'RECEIVE_TODOS'` 는 `'FETCH_TODOS_SUCCESS'` 로 바꿉니다.
- 할 일 목록 가져오기에 실패한 경우를 위해 에러 핸들러에 `'FETCH_TODOS_FAILURE'` 액션을 추가합니다.

또한 에러 핸들러에 `filter` 데이터와 `message`를 전달할 것입니다. `message`의 경우 명시되어 있다면 `error.message`를, 그렇지 않다면 `Something went wrong.`를 대체로 넣을 것입니다.

#### fetchTodos return 업데이트

```js
return api.fetchTodos(filter).then(
  response => {
    dispatch({
      type: "FETCH_TODOS_SUCCESS",
      filter,
      response
    });
  },
  error => {
    dispatch({
      type: "FETCH_TODOS_FAILURE",
      filter,
      message: error.message || "Something went wrong."
    });
  }
);
```

이제, `fetchTodos` 액션 크리에이터는 모든 경우의 수를 다루며, 전에 있던 액셩 크리에이터들은 삭제합니다. (`requestTodos`, `receiveTodos`)

---

### 리듀서 업데이트

액션 타입이 바뀌었으므로, 이에 상응하도록 리듀서를 바꿔야합니다. 우리가 작성했던 `ids` 리듀서는 `RECEIVE_TODO` 대신 `FETCH_TODOS_REQUEST`로 다룰 필요가 있습니다.

`isFetching` 리듀서는 `REQUEST_TODOS` 대신에 `FETCH_TODOS_REQUEST`, `RECEIVE_TODOS`는 대신에 `FETCH_TODOS_SUCCESS`로 다룹니다.

또한 `FETCH_TODOS_FAILURE`는 `false`를 반환하게 하여, 로딩인디케이터가 계속 실행되지 않도록 합니다.

마지막으로 바꾸어야 하는 리듀서는 `byId`입니다. `RECEIVE_TODOS`를 `FETCH_TODOS_SUCCESS`롤 대체합니다.

#### `isFetching` 리듀서 업데이트

```js
const isFetching = (state = false, action) => {
  if (filter !== action.filter) {
    return state;
  }
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return true;
    case "FETCH_TODOS_SUCCESS":
    case "FETCH_TODOS_FAILURE":
      return false;
    default:
      return state;
  }
};
```

이러한 변화들로, 실패에 상응하는 액션이 일어나고, `isFetching`의 값을 `false`로 만들어주기 때문에 로딩 인디케이터는 무한 반복하지 않을 것이다.

---

### 에러 띄우기

component 디렉토리에 `FetchError.js`라는 새 파일을 만들도록 합니다.

`React`를 import 한 뒤 이름이 `FetchError`인 상태가 없는 컴포넌트를 만들고, 문자열인 `message`와 함수인 `onRtry`를 prop으로 받습니다.
이 컴포넌트는 이 파일에서 default로 export될 것입니다.

렌더링되는 div 태그는 부작용을 서술하는 에러를 담고 있을 것입니다. 버튼을 클릭했을 때 `onRetry` 콜백을 실행시켜 데이터를 다시 가져오게 합니다.

#### `FetchError` 컴포넌트

```js
const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);
```

---

### `FetchError`를 `VisibleTodoList` 컴포넌트에 추가하기

우리는 `VisibleTodoList`에 `FetchError`를 import 한 뒤 `render` 메소드를 업데이트 합니다.

에러메세지를 받아오기 위해서 `VisibleTodoList`의 prop들을 재구성할 필요가 있습니다.

```js
render() {
  const { isFetching, errorMessage, toggleTodo, todos } = this.props;
  ...
```

또한 렌더 메소드 내부에 "만약 prop으로 에러메세지가 들어있다면, 할 일 목록 대신에 `FetchError`컴포넌트를 반환하라" 라는 조건문을 추가합니다.

`FetchError` 컴포넌트는 분해대입된 `errorMessage`를 전달한 `message` prop을 필요로합니다.
또한 데이터를 다시 불러오기 위한 에러 함수인 `this.fetchData()`를 호출하는 callback를 `onRetry` prop에 전달합니다.

```js
// VisibleTodoList의 render 메소드 내부
if (errorMessage && !todos.length) {
  return <FetchError message={errorMessage} onRetry={() => this.fetchData()} />;
}
```

우리는 `errorMessage`에 접근할 수 있도록 `VisibleTodoList`의 `mapStateToProps` 내부에 추가합니다. 같은 패턴으로 작성된 `isFetching`의 `state`와 `filter`를 인자로 한 `getErrorMessage`라 불리는 셀렉터를 호출함에 의해 `errorMessage`를 받을 수 있습니다.

```js
// VisibleTodoList 내부에 있는 mapStateToProps 함수
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || "all";
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  };
};
```

---

### `getErrorMessage` 시행

우리는 `getErrorMessage`를 `reducer`로 부터 가져오는 구문을 `VisibleTodoList` 파일 상단에 추가해야합니다.

`import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers';`

이제, root 리듀서 파일 (/reducers/index.js) 내부에서 `getIsFetching`셀렉터를 카피하서 리팩토링한 `getErrorMessage` 셀렉터를 작성합니다.

#### 셀렉터 만들기

```js
export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter]);
```

#### `createList` 업데이트

`createList.js` 내부에, 상태를 가져와 에러메세지를 호출하는 `getErrorMessage` 셀렉터를 새로 추가합니다.

```js
export const getErrorMessage = state => state.errorMessage;
```

우리는 `null`값을 가지는 초기 상태를 가진 `errorMessage` 리듀서를 선언할 것입니다. 이렇게 하는 이유는 리듀서사 초기 상태로 `undefined`를 가질 수 없고, 없다는 것을 명시적으로 나타내야 하기 때문입니다.

이 파일의 다른 리듀서들처럼, 우리는 `createList`에 인자로서 명시된 `filter`가 action의 `filter`값과 다를 때 모든 action을 건너뛰기를 원합니다.
`filter`가 일치하면, action들을 다루기를 원합니다.

- 실패했을 때 에러메세지를 띄우기를 원합니다.
- 클라이언트가 다시 요청을 보낸다면, 에러메세지를 지웁니다.
- 다른 액션에 대해 현재의 상태를 반환합니다.

#### 완성된 `errorMessage`리듀서

```js
const errorMessage = (state = null, action) => {
  if (filter !== action.filter) {
    return state;
  }
  switch (action.type) {
    case "FETCH_TODOS_FAILURE":
      return action.message;
    case "FETCH_TODOS_REQUEST":
    case "FETCH_TODOS_SUCCESS":
      return null;
    default:
      return state;
  }
};

return combineReducers({
  ids,
  isFetching,
  errorMessage
});
```

---

### API 업데이트

매번 에러를 반환하는 대신에 retry 버튼을 시도해 볼 수 있도록 일정 확률에 에러를 반환하도록 설정합니다.

```js
export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error("Boom!");
    }

    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "active":
        return fakeDatabase.todos.filter(t => !t.completed);
      case "completed":
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
```
