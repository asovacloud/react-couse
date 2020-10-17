import React from 'react';

const Counter = ({ counter, dec, inc, rnd }) => {
  return (
    <div className="jumbotron">
      <div>{ counter }</div>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg mr-2">DEC</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg mr-2">INC</button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg">RND</button>
    </div>
  );
};

export default Counter;
