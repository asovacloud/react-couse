import React from 'react';
import { BookstoreServiceConsumer } formimport { BookstoreServiceProvider } from '../bookstore-service-context';
 '../bookstore-service-context/';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            <Wrapped
              { ...props }
              bookstoreService={ bookstoreService }
            />
          }
        }
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;