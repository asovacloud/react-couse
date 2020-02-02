import React from "react";

import AppHeader from "../app-header";
import FilterPanel from "../filter-panel";
import TodoList from "../todo-list";

import "./app.css";

const App = () => {
  const todoData = [
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
  ];

  return (
    <div className="app">
      <AppHeader title="My Todo List" toDo={1} done={3} />
      <FilterPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
