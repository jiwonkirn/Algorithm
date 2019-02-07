import { connect } from "react-redux";
import { toggleTodo } from "../ducks/todos";
import TodoList from "../components/TodoList";

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(t => t.complete);
    case "active":
      return todos.filter(t => !t.complete);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibileTodos(state.todos, ownProps.filter)
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
