import React from "react";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      aria-pressed={props.ariaPressed}
      className="btn toggle-btn"
    >
      <span className="visually-hidden">Show </span>
      <span>{props.taskOption}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;