import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CoinsComponent.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Coin from './CoinComponent';

import ErrorBoundary from '../../ErrorBoundary';

class Coins extends Component {
    static propTypes = {
        coinsList: PropTypes.array.isRequired,
    };

    state = {
        search: '',
    };

    handleSearch = event => {
        this.setState({ search: event.target.value });
    };

    filterCoinsList = (coinList, searchInput) =>
        coinList.filter(coin =>
            coin.CoinName.toLowerCase().includes(searchInput.toLowerCase()),
        );

    render() {
        const { search } = this.state;
        const { coinsList } = this.props;

        return (
            <div className="main">
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Search handler={this.handleSearch} search={search} />
                </ErrorBoundary>

                <ul className="coins-list">
                    {this.filterCoinsList(coinsList, search).map(coin => (
                        <Coin coin={coin} key={coin.Id} search={search} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Coins;
