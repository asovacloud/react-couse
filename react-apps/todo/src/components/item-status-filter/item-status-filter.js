import React, { Component } from "react";

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="First group">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => console.log("All")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => console.log("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => console.log("Done")}
        >
          Done
        </button>
      </div>
    );
  }
}
