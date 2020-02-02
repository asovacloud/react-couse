import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false
  };

  onLabelClick = () => {
    this.setState({
      done: true
    });
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    const styleLabel = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={styleLabel}
          onClick={this.onLabelClick}
        >
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
  }
}
