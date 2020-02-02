import React from "react";

import "./todo-list-item.css";

/*const TodoListItem = ({ label, important = false }) => {*/
const TodoListItem = ({ important, label }) => {
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal"
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash" aria-hidden="true" />
      </button>

      <button type="button" className="btn btn-outline-warning btn-sm">
        <i className="fa fa-exclamation" aria-hidden="true" />
      </button>
    </span>
  );
};

export default TodoListItem;
