import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }

};

const store = createStore(reducer);
store.subscribe(() => {
  console.log('store: ', store.getState());
});

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
