import React, { Component } from 'react';
import ItemList from "../item-list/";
import PersonDetails from "../person-details/";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, info) {

        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2 info-box">
                <div className="col-dm-6 info-box__col1">
                    <ItemList
                        onItemSelected={ this.onPersonSelected }
                        getData={ this.swapiService.getAllPeople }
                    />
                </div>
                <div className="col-md-6 info-box__col2">
                    <PersonDetails personId={ this.state.selectedPerson } />
                </div>
            </div>
        );
    }
}
