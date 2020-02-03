import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form className="add-item" onSubmit={this.onSubmit}>
        <div className="row-input">
          <input
            type="text"
            placeholder="Add new element..."
            className="form-control"
            value={label}
            onChange={this.onLabelChange}
          />
        </div>
        <button className="btn btn-sm btn-outline-success">
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
      </form>
    );
  }
}
