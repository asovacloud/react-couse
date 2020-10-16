import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    default:
      return state;
  }

};

const store = createStore(reducer);
store.subscribe(() => {
  document.querySelector('#counter').textContent = store.getState();
});

document.querySelector('#inc').addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

document.querySelector('#dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});
