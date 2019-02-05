import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./filter";

export default combineReducers({
  todos,
  visibilityFilter
});
