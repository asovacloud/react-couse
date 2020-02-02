import React, { Component } from "react";

import AppHeader from "../app-header";
import FilterPanel from "../filter-panel";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      {
        id: "1",
        label: "Drink Coffee 000",
        important: false
      },
      {
        id: "2",
        label: "Make Awesome App",
        important: true
      },
      {
        id: "3",
        label: "Have a lunch",
        important: false
      }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    const createItem = {
      id: id,
      label: text,
      important: false
    };

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, createItem]
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader title="My Todo List" toDo={1} done={3} />
        <FilterPanel />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItem onAdd={this.addItem} />
      </div>
    );
  }
}
