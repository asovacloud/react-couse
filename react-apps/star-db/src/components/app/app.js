import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";

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

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={ 11 }
                getData={ getPerson }
                getImageUrl={ getPersonImage }
            />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={ 11 }
                getData={ getStarship }
                getImageUrl={ getStarshipImage }
            />
        );

        return (
            <div className="wrapper">
                <Header />
                <RandomPlanet />

                <Row
                    left={ personDetails }
                    right={ starshipDetails }
                />

            </div>
        );
    }
}
