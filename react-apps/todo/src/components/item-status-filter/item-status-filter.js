import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);
    /*state = {
            filter: ''
        }*/
  }

  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    const { onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const clazz =
        this.props.filter === name ? "btn-info" : "btn btn-outline-info";
      return (
        <button
          type="button"
          className={`btn ${clazz}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group" role="group" aria-label="First group">
        {buttons}
      </div>
    );
  }
}
