import React, { Component } from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';

import './app.css';

export default class App extends Component {

    state = {
        selectedPerson: 4
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Header />
                <RandomPlanet />

                <div className="row mb2 info-box">
                    <div className="col-dm-6 info-box__col1">
                        <ItemList onItemSelected={ this.onPersonSelected } />
                    </div>
                    <div className="col-md-6 info-box__col2">
                        <PersonDetails personId={ this.state.selectedPerson } />
                    </div>
                </div>

            </div>
        );
    }
}
