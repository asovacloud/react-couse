import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  render() {
    const { onAdd } = this.props;

    return (
      <div className="add-item">
        <div className="row-input">
          <input
            type="text"
            placeholder="Add new element..."
            className="form-control"
            id="add-item"
          />
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-success"
          onClick={() => onAdd("Yo yo buddy!!!")}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
