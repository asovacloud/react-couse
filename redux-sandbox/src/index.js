import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    case 'RND':
      return state + action.payload
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

document.querySelector('#rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*10);

  store.dispatch({
    type: 'RND',
    payload
  });
});
