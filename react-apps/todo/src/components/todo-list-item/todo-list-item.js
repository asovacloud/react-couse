import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({
  done,
  label,
  onDeleted,
  onDone,
  onImportant,
  important
}) => {
  let classNames = "todo-list-item";
  if (done) {
    classNames += " done";
  }

  let classBtnImportant = "btn btn-sm";

  if (important) {
    classNames += " important";
    classBtnImportant += " btn-warning";
  } else {
    classBtnImportant += " btn-outline-warning";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={onDeleted}
      >
        <i className="fa fa-trash" aria-hidden="true" />
      </button>

      <button type="button" className={classBtnImportant} onClick={onImportant}>
        <i className="fa fa-exclamation" aria-hidden="true" />
      </button>
    </span>
  );
};

export default TodoListItem;
