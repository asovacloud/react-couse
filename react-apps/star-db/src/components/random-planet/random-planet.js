import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet })
    };

    updatePlanet() {
        // const id = Math.floor(Math.random()*25) + 2;
        const id = 12;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {

        const {
            planet: {
                id,
                population,
                rotationPeriod,
                diameter,
                name
            }
        } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <div className="random-planet__images">
                    <img
                        className="planet-image"
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt="image description"
                    />
                </div>
                <div className="random-planet__holder">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span className="value">{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Perion:</span>
                            <span className="value">{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span>
                            <span className="value">{ diameter }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
