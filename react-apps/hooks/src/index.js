import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v - 1)}
        >-</button>
        <button
          onClick={() => setValue((v) => v + 1)}
        >+</button>
        <button
          onClick={() => setVisible(false)}
        >hide</button>
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button
      onClick={() => setVisible(true)}
    >
      show
    </button>
  }
};

const usePlanetInfo = (id) => {
  const [planetName, setPlanetName] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.co/api/planets/${id}/`)
      .then(res => res.json())
      .then(data => !cancelled && setPlanetName(data.name));
    return () => cancelled = true
  }, [id]);

  return (
    <h1>{ planetName }</h1>
  );
};

const PlanetInfo = ({ id }) => {

  const planetName = usePlanetInfo(id);

  return (
    <div style={{marginTop: 20+'px'}}>
      {id} - { planetName }
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
