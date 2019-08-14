import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdfasdf", name: "Sveta", age: 33 },
      { id: "asdf234", name: "Sofia", age: 3 },
      { id: "asdf456", name: "Katie", age: 20 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let btnStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid tomato",
      padding: "8px 18px",
      cursor: "pointer",
      borderRadius: "3px",
      boxShadow: " 2px 3px 5px rgba(0,0,0,0.4)"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnStyle.backgroundColor = "#32CD32";
      btnStyle.color = "white";
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("tomato");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    if (this.state.persons.length === 0) {
      classes.push("shadow");
    }

    return (
      <div className="App">
        <h1>Believe in yourself.</h1>
        <p className={classes.join(" ")}>Just do it.</p>
        <button style={btnStyle} onClick={this.togglePersonHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
