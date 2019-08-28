import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className="Person">
        <div className="btn-delete" onClick={this.props.click}>
          <img
            src="https://img.icons8.com/material/24/000000/delete-forever--v1.png"
            alt="description"
          />
        </div>
        <p>
          This is a {this.props.name} and I'm an {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
