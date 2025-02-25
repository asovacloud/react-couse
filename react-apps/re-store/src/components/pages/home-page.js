import React from 'react';
import BooksList from '../book-list';

const HomePage = () => {
  const books = [];

  return (
    <BooksList books={books} />
  );
}

export default HomePage;