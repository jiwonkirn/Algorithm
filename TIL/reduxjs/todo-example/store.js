import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "./ducks";
import thunk from "redux-thunk";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;

  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch;
  };
};

const configureStore = () => {
  // const middleware = [thunk];

  const store = createStore(todoApp);

  // "production"은 배포 모드
  // "development"는 개발 모드이다.
  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }

  // 순서가 addLoadingToDispatch 위로 가게되면, return된 promise 객체가 action으로 들어간다.
  store.dispatch = addPromiseSupportToDispatch(store);

  console.log(store.dispatch);

  return store;
};

export default configureStore;
