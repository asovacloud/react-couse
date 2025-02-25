import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, label, field }) => {
    return (
        <li className="list-group-item">
            <strong className="term">{ label }: </strong>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.itemId !== prevProps.itemId
            || this.props.getData !== prevProps.getData
            || this.props.getImageUrl !== prevProps.getImageUrl
        ) {
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

        const { name } = this.state.item;

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
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
