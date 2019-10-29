import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);

    return () => {
      console.log("[Cockpit.js] Clean useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] Clean work in 2nd useEffect");
    };
  });

  let btnStyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid tomato",
    padding: "8px 18px",
    cursor: "pointer",
    borderRadius: "3px",
    boxShadow: " 2px 3px 5px rgba(0,0,0,0.4)"
  };

  if (props.showPersons) {
    btnStyle.backgroundColor = "#32CD32";
    btnStyle.color = "white";
  }

  const classesDescription = [];

  if (props.personsLength <= 2) {
    classesDescription.push(classes.tomato);
  }
  if (props.personsLength <= 1) {
    classesDescription.push(classes.bold);
  }
  if (props.personsLength === 0) {
    classesDescription.push(classes.shadow);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classesDescription.join(" ")}>Just do it.</p>
      <button style={btnStyle} onClick={props.clicked}>
        {props.showPersons ? "Hide Persons" : "Show Persons"}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);