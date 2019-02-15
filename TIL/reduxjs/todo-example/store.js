import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "./ducks";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }

  return createStore(
    todoApp,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export default configureStore;
