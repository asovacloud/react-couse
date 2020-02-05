/*
import React from 'react';

const App = () => {

};
*/

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
      throw new Error(`Could not fetch ${url} receiverd ${res.status}`)
  }

  const body = await res.json();

  return body
};

getResource('https://swapi.co/api/people/1asdfsdfsdf/')
.then((body) => {
    console.log(body);
})
.catch((err) => {
    console.error('Could not fetch.', err)
});



/*fetch('https://swapi.co/api/people/1')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });*/
