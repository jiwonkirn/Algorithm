import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibilTodoList";
import Footer from "./components/Footer";

export default function App({ match }) {
  return (
    <>
      <AddTodo />
      <VisibleTodoList filter={match.params.filter || "all"} />
      <Footer />
    </>
  );
}
