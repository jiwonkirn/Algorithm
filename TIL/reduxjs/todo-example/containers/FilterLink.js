// import { Link } from "react-router-dom";
import React from "react";

import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={"/" + (filter === "all" ? "" : filter)}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

// import { connect } from "react-redux";
// import { setVisibilityFilter } from "../ducks/filter";
// import Link from "../components/Link";

// const mapStateToProps = (state, ownProps) => {
//   console.log(ownProps);
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     dispatch(setVisibilityFilter(ownProps.filter));
//   }
// });

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

export default FilterLink;
