// action types
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const visibilityFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// action
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

// reducer
export default function(state = {}, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}
