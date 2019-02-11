import todo from "./todo";
import { combineReducers } from "redux";
import { v4 } from "node-uuid";
import * as api from "../api";

/* ===========
  action type
  =========== */
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

/* ======
  reducer
  ======= */

// todos(array) reducer
const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case "all":
      return allTodos;
    case "completed":
      return allTodos.filter(t => t.completed);
    case "active":
      return allTodos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

/* ====== 
  action
  ======= */
// receive todos
const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(res => receiveTodos(filter, res));

// add todo
export const addTodo = text => ({
  id: v4(),
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
