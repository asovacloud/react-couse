import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    {props.options.length === 0 && <div className="error-message">Please add an option to get started!</div>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
