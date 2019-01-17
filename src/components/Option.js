import React from 'react';

const Option = (props) => (
  <div className="todo-box__content__option">
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    ></button>
  </div>
);

export default Option;
