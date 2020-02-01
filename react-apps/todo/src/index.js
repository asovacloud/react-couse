import React from "react";
import ReactDOM from "react-dom";

const AppHeader = props => {
  return <h1>{props.title}</h1>;
};

const SearchPanel = props => {
  return <input type="text" placeholder={props.placeholder} />;
};

const TodoListItem = props => {
  return <li>{props.content}</li>;
};

const TodoList = () => {
  return (
    <ul>
      <TodoListItem content="Lear React" />
      <TodoListItem content="Build Awesome App" />
    </ul>
  );
};

const el = (
  <div>
    <AppHeader title="My Todo list" />
    <SearchPanel placeholder="Search..." />
    <TodoList />
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
