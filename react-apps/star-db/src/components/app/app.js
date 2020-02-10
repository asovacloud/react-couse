import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

import './app.css';

export default class App extends Component {

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
            <div className="wrapper">
                <Header />
                <RandomPlanet />

                <PeoplePage />

            </div>
        );
    }
}
