import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../ducks";
import { withRouter } from "react-router-dom";
import TodoList from "../components/TodoList";
import { getVisibleTodos, getIsFetching, getErrorMassage } from "../ducks";
import FetchError from "../components/FetchError";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log("done!"));
  }

  render() {
    const { toggleTodo, errorMassage, isFetching, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    if (errorMassage && !todos.length) {
      return (
        <FetchError massage={errorMassage} onRetry={() => this.fetchData()} />
      );
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    errorMassage: getErrorMassage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  };
};

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodoList)
);

export default VisibleTodoList;
