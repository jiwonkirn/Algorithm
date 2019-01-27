import expect from "expect";
import deepFreeze from "deep-freeze";

// reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id !== action.id) return todo;
        return {
          ...todo,
          complete: !todo.complete
        };
      });
    default:
      return state;
  }
};

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
