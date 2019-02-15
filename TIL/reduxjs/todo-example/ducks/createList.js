import { combineReducers } from "redux";

const createList = filter => {
  // 해당하는 필터의 아이디값을 배열로 만드는 함수를 반환하는 함수
  const ids = (state = [], action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "RECEIVE_TODOS":
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };

  // 정보를 받아오는 중인지를 나타내는 리듀서
  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "REQUEST_TODOS":
        return true;
      case "RECEIVE_TODOS":
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching
  });
};

export default createList;

// 필터링된 상태를 받아 해당 상태의 아이디값을 담은 배열을 반환한다.
export const getIds = state => state.ids;
// 지금 통신중인지에 대한 여부를 반환한다.
export const getIsFetching = state => state.isFetching;
