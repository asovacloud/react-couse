import React from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';

/*import PlanetDetails from '../planet-details';
import StarshipDetails from '../startship-details';*/

import './app.css';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <RandomPlanet />

            <div className="row mb2 info-box">
                <div className="col-dm-6 info-box__col1">
                    <ItemList />
                </div>
                <div className="col-md-6 info-box__col2">
                    <PersonDetails />
                </div>
            </div>

        </div>
    );
};

export default App;
