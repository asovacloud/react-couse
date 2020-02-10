import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;

        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    }

    render() {

        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const {
            id,
            name,
            gender,
            birthYear,
            eyeColor
        } = this.state.person;

        return (
            <div className="person-details details-box">
                <div className="image">
                    <img className="person-image"
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                         alt="character"
                    />
                </div>
                <div className="holder">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong className="term">Gender: </strong>
                            <span>{ gender }</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="term">Birth Year: </strong>
                            <span>{ birthYear }</span>
                        </li>
                        <li className="list-group-item">
                            <strong className="term">Eye color: </strong>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
