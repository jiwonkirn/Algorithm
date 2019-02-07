import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./ducks";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const configureStore = () => {
  const persistdState = loadState();

  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    persistdState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
