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

export const getErrorMassage = (state, filter) =>
  fromList.getErrorMassage(state.listByFilter[filter]);

/* ====== 
  action
  ======= */

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: "FETCH_TODOS_REQUEST",
    filter
  });

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
        message: error.message || "Somthing went wrong"
      });
    }
  );
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
