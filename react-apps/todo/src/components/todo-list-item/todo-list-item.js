import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="fa fa-trash" aria-hidden="true" />
        </button>

        <button
          type="button"
          className={classBtnImportant}
          onClick={this.onImportantClick}
        >
          <i className="fa fa-exclamation" aria-hidden="true" />
        </button>
      </span>
    );
  }
}
