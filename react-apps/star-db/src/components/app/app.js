import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

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

        return (
            <div className="wrapper">
                <Header />
                <RandomPlanet />

                <PeoplePage />

                <div className="row mb2 info-box">
                    <div className="col-dm-6 info-box__col1">
                        <ItemList
                            onItemSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllPlanets }
                            renderItem={ ({ name }) => (<span>{name} <button>!</button></span>) }
                        />
                    </div>
                    <div className="col-md-6 info-box__col2">
                        <PersonDetails personId={ this.state.selectedPerson } />
                    </div>
                </div>

                <div className="row mb2 info-box">
                    <div className="col-dm-6 info-box__col1">
                        <ItemList
                            onItemSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllStarships }
                            renderItem={ (item) => item.name }
                        />
                    </div>
                    <div className="col-md-6 info-box__col2">
                        <PersonDetails personId={ this.state.selectedPerson } />
                    </div>
                </div>

            </div>
        );
    }
}
