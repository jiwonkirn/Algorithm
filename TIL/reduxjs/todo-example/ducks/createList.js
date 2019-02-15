import { combineReducers } from "redux";

const createList = filter => {
  // 해당하는 필터의 아이디값을 배열로 만드는 함수를 반환하는 함수
  const ids = (state = [], action) => {
    switch (action.type) {
      case "FETCH_TODOS_SUCCESS":
        return filter === action.filter
          ? action.response.map(todo => todo.id)
          : state;
      case "ADD_TODO_SUCCESS":
        return filter !== "completed" ? [...state, action.response.id] : state;
      default:
        return state;
    }
  };

  // 정보를 받아오는 중인지를 나타내는 리듀서
  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state;
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

  const errorMassage = (state = null, action) => {
    if (action.filter !== filter) return state;
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
    errorMassage
  });
};

export default createList;

// 필터링된 상태를 받아 해당 상태의 아이디값을 담은 배열을 반환한다.
export const getIds = state => state.ids;
// 지금 통신중인지에 대한 여부를 반환한다.
export const getIsFetching = state => state.isFetching;
export const getErrorMassage = state => state.errorMassage;
