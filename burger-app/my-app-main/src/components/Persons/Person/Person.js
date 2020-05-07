import React, { Component } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      <Aux>
        <div className={classes.btnDelete} onClick={this.props.click} key="i1">
          <img
            src="https://img.icons8.com/material/24/000000/delete-forever--v1.png"
            alt="description"
          />
        </div>
        <p key="i2">
          This is a {this.props.name} and I'm an {this.props.age} years old!
        </p>
        <p key="i3">{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          key="i4"
          //ref={ (inputEl) => { this.inputElement = inputEl } }
          ref={this.inputElementRef}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
