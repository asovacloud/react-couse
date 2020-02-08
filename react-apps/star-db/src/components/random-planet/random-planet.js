import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*19) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const {
            planet,
            loading,
            error
        } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet }/> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return <div className="random-planet jumbotron rounded">
            { spinner }
            { content }
            { errorMessage }
        </div>
    }
}

const PlanetView = ({ planet }) => {
    const {
        id,
        name,
        population,
        rotationPeriod,
        diameter
    } = planet;

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
