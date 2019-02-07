import { v4 } from "node-uuid";

/* ===========
  action type
  =========== */
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

/* ======
  reducer
  ======= */
// todo(obj) reducer
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: v4(),
        text: action.text,
        complete: false
      };

    case TOGGLE_TODO:
      if (state.id === action.id) {
        return Object.assign({}, state, {
          complete: !state.complete
        });
      }
      return state;

    default:
      return state;
  }
};

// todos(array) reducer
export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];

    case TOGGLE_TODO:
      return state.map(item => todo(item, action));

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}

/* ====== 
  action
  ======= */
// add todo
export const addTodo = text => ({
  type: ADD_TODO,
  text: text
});

// toggle todo
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

// remove todo
export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});
