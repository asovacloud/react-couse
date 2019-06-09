import React, { Component } from 'react';

import './CoinsComponent.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Coin from './CoinComponent';

import coinsData from './coinsList.json';

class Coins extends Component {
    state = {
        coinsList: Object.keys(coinsData.Data)
            .slice(0, 12)
            .map(key => {
                return coinsData.Data[key];
            }),
        search: '',
    };

    handleSearch = event => {
        this.setState({ search: event.target.value });
    };

    filterCoinsList = () => {
        const { coinsList, search } = this.state;
        return coinsList.filter(coin =>
            coin.CoinName.toLowerCase().includes(search.toLowerCase()),
        );
    };

    render() {
        // const { search } = this.state;

        return (
            <div className="main">
                <Header />

                <Search
                    handler={this.handleSearch}
                    search={this.state.search}
                />

                <ul className="coins-list">
                    {this.filterCoinsList().map(coin => {
                        return (
                            <Coin
                                key={coin['Id']}
                                id={coin['Id']}
                                ImageUrl={coin['ImageUrl']}
                                CoinName={coin['CoinName']}
                                FullName={coin['FullName']}
                                Url={coin['Url']}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Coins;
