import { combineReducers } from "redux";
import { v4 } from "node-uuid";
import * as api from "../api";

import byId, * as fromById from "./byId";
import createList, * as fromList from "./createList";

const listByFilter = combineReducers({
  all: createList("all"),
  active: createList("active"),
  completed: createList("completed")
});

const todos = combineReducers({
  byId,
  listByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter]);

/* ====== 
  action
  ======= */
// receive todos
const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const requestTodos = filter => ({
  type: "REQUEST_TODOS",
  filter
});

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));
  return api.fetchTodos(filter).then(res => {
    dispatch(receiveTodos(filter, res));
  });
};

// add todo
export const addTodo = text => ({
  id: v4(),
  type: "ADD_TODO",
  text: text
});

// toggle todo
export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
