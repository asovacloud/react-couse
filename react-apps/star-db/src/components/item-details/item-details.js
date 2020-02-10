import React, { Component } from 'react';

import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {
            itemId,
            getData,
            getImageUrl
        } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {

        const {
            item,
            image
        } = this.state;

        if (!item) {
            return <span>Select a person from a list</span>
        }

        const {
            id,
            name,
            gender,
            birthYear,
            eyeColor
        } = this.state.item;

        return (
            <div className="person-details details-box">
                <div className="image">
                    <img className="person-image"
                         src={ image }
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
