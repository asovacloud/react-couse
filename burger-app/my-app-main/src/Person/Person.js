import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <div className="btn-delete" onClick={props.click}>
        <img
          src="https://img.icons8.com/material/24/000000/delete-forever--v1.png"
          alt="description"
        />
      </div>
      <p>
        This is a {props.name} and I'm an {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
