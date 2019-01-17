import React from 'react';

const Header = (props) => (
  <div className="todo-box__heading">
    <h1>{props.title}</h1>
  </div>
);

Header.defaultProps = {
  title: 'todos'
};

export default Header;
