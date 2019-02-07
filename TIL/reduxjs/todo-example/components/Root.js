import App from "../App";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:filter?" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
}
