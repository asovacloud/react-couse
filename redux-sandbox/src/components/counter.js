import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

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

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

  return {
    inc,
    dec,
    rnd: () => {
      const payload = Math.floor(Math.random()*10);

      return rnd(payload);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
