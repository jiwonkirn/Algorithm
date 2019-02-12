import { createStore, applyMiddleware, compose } from "redux";
import todoApp from "./ducks";
import createLogger from "redux-logger";
import promise from "redux-promise";

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
