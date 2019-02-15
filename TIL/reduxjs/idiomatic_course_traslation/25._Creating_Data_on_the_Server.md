# 25. Creating Data on the Server (서버에 데이터 만들기)

### 가짜 API 업데이트

몇몇 새로운 함수들이 우리의 가짜 클라이언트 API에 추가되었습니다.

첫 새로운 가짜 API 엔드포인트는 `addTodo` 입니다. 이것은 네트워크 연결을 흉내내고, 새로운 할 일을 만들어냅니다.
이 API가 텍스트를 받에 가짜 데이터베이스에 집어넣으면, 다른 REST 엔드포인트터럼 `todo` 객체를 반환합니다.

#### `addTodo` 엔드포인트

```js
export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });
```

두번째 가짜 API 엔드포인트는 `toggleTodo`입니다. 이것 역시 네트워크 연결을 흉내냅니다. 가짜 데이터에서 부합니는 `todo`를 찾은 뒤 `completed` 값을 반대로 뒤집고 `todo`를 응답으로 반환합니다.

#### `toggleTodo` 엔드포인트

```js
export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
```

#### `byId` 리듀서 업데이트하기

새로 추가된 할 일이 서버 응답의 한 부분으로 추가될 것이기 때문에, 우리는 `byId` 리듀서가 관리하는 형태에 맞게 todo를 병합하기 위해서 변경할 필요가 있습니다.

저는 "ADD_TODO_SUCCESS" 액션에 대한 새로운 case를 추가합니다. 우리는 스프레드 문법을 통해 기존 배열을 복사하고, 응답받은 id값을 key, action의 response를 값으로 하는 새로운 todo를 추가합니다.

```js
// reducers/byId.js 내부
const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case "ADD_TODO_SUCCESS": // Our new case
      return {
        ...state,
        [action.response.id]: action.response
      };
    default:
      return state;
  }
};
```

하지만 우리는 filter로부터 리스트를 업데이트하지 않았고, 배열은 전과 같이 여전히 3개의 id값 만을 가지고 있습니다. 만약 제가 다른 filter 탭으로 이동한다면, 새로 입력했던 todo가 나타압니다. 이러한 이유는 이 할일의 id가 불러와진 id 값들로부터 지금 포함됐기 때문입니다. 비슷한 이유로 다시 원래의 filter 탭으로 이동하면 추가했던 todo가 나타납니다. 이는 데이터가 탭을 이동하면서 다시 불러와졌었기 때문입니다.

#### `createList` 업데이트

각각의 탭의 id들은 `createList.js`에 정의된 리듀서들에 의해 관리되므로, 우리는 `ADD_TODO_SUCCESS` 액션을 다루기 위해 `ids` 리듀서를 업데이트할 필요가 있습니다.

서버로부터 todo가 추가됐다는 확인을 받으면, 우리는 기존에 존재하던 id값들에 추가된 id값을 포함한 리스트를 반환할 수 있습니다.

다른 액션과는 다르게, `ADD_TODO_SUCCESS`는 액션 객체에 filter 속성을 가지고 있지 않으며, 현재 `ids` 내부에 있는 `if (filter !== action.filter)` 구문은 실패할 것이다. 이러한 이유로, 기존의 체크하는 방식을 각가의 케이스에 다른 체크 방식을 적용하는 방식으로 대체할 것이다.

`FETCH_TODOS_SUCCESS`에서는 만약 action 객체의 filter와 리스트의 필터가 일치한다면 불러온 id들을 대체하기를 원할 것이다.

하지만, `ADD_TODO_SUCCESS`에서는 완료된 할일들을 보여주는 필터를 제외하고는 새롭게 추가된 할일이 바로 보여지기를 원할 것이다. (추가된 할일은 완료되지 않았다고 간주하기 때문이다.)

```js
const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter ?
          action.response.map(todo => todo.id) :
          state;
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.id] :
          state;
      default:
        return state;
    }
  };
```
