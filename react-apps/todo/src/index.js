import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header/app-header";
import FilterPanel from "./components/filter-panel/filter-panel";
import TodoList from "./components/todo-list/todo-list";

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

  const styleWrap = {
    padding: "20px 10px",
    maxWidth: "600px",
    margin: "0 auto"
  };

  return (
    <div style={styleWrap}>
      <AppHeader title="My Todo List" toDo={1} done={3} />
      <FilterPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
