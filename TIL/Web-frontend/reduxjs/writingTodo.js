import expect from "expect";
import deepFreeze from "deep-freeze";
import { createStore, combineReducers } from "redux";

// 배열을 제어하는 리듀서 함수
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        complete: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        complete: !state.complete
      };
    default:
      return state;
  }
};

// Todo reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// filter reducer
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

// combine reducers
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// combineReducers의 원리는 아래와 같다.
// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )

//   }
// }

// store 만들기
const store = createStore(todoApp);

console.log(store.getState());

// action을 dispatch
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Learn Redux"
});

store.dispatch({
  type: "ADD_TODO",
  id: 2,
  text: "Learn Redux thunk"
});

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
});

console.log(store.getState());

/* =====
  TEST
======= */
const testAddTodo = () => {
  const stateBefore = [];

  // action
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };

  // action 한 결과물
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      complete: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      complete: false
    },
    {
      id: 1,
      text: "Go shopping",
      complete: false
    }
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      complete: false
    },
    {
      id: 1,
      text: "Go shopping",
      complete: true
    }
  ];
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log("All tests passed");
