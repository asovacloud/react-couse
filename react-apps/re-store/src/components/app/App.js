import React from 'react';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log('bookstoreService:', bookstoreService.getBooks());
  return (
    <h1>This is new App!!!</h1>
  );
};

export default withBookstoreService()(App);
