import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibilTodoList";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Provider>
    );
  }
}

export default App;
