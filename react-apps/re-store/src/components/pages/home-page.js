import React from 'react';
import BooksList from '../book-list';

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michel T. Nygard'
    }
  ];

  return (
    <BooksList books={books} />
  );
}

export default HomePage;