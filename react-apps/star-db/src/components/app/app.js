import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from '../swapi-service-contest';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import DummySwapiService from "../../services/dummy-swapi-service";

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    };

    onServiceChage = () => {
        this.setState(({ swapiService }) => {
            const Service = ( swapiService instanceof SwapiService ) ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            };
        });
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
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Router>
                        <div className="wrapper">
                            <Header onServiceChange={ this.onServiceChage } />

                            <RandomPlanet />

                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
