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
const todo = (state = {}, action, id) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: id + 1,
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
      let id = state.length > 0 ? Math.max(...state.map(i => i.id)) : 0;
      return [...state, todo(undefined, action, id)];

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
