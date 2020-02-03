import React, { Component } from "react";

import AppHeader from "../app-header";
import FilterPanel from "../filter-panel";
import TodoList from "../todo-list";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
    searchValue: ""
  };

  createTodoItem(label) {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    return {
      id: id,
      label: label,
      important: false,
      done: false
    };
  }

  searchItems = e => {
    this.setState({
      searchValue: e
    });
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
    const createItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, createItem]
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  search(items, term) {
    if (term.length === "") {
      return items;
    } else {
      term = term.toLowerCase();
    }

    return items.filter(item => item.label.toLowerCase().indexOf(term) > -1);
  }

  render() {
    const { todoData, searchValue } = this.state;

    const visibleItems = this.search(todoData, searchValue);

    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader title="My Todo List" toDo={todoCount} done={doneCount} />
        <FilterPanel onSearch={this.searchItems} searchValue={searchValue} />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone}
        />
        <AddItem onAdd={this.addItem} />
      </div>
    );
  }
}
