import { connect } from "react-redux";
import { toggleTodo } from "../ducks/todos";
import TodoList from "../components/TodoList";

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETE":
      return todos.filter(t => t.complete);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.complete);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibileTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
