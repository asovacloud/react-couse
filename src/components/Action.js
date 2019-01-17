import React from 'react';

const Action = (props) => (
  <div className='todo-box__content__settings'>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      className='btn-question'
    >
      What should I do?
      </button>

      <button className='btn-remove' onClick={props.handleDeleteOptions}>Remove All</button>
  </div>
);

export default Action;
