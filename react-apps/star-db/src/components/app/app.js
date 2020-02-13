import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";


import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-component";

import './app.css';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <div className="wrapper">
                    <Header />
                    <RandomPlanet />

                    <PersonDetails itemId={ 11 } />
                    <PlanetDetails itemId={ 5 } />
                    <StarshipDetails itemId={ 9 } />

                    <PersonList />
                    <StarshipList />
                    <PlanetList />

                </div>
            </ErrorBoundry>
        );
    }
}
