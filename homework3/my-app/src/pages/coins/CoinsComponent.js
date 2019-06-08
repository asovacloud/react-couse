import React, { Component } from 'react';

import './CoinsComponent.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Coin from './CoinComponent';

import coinsData from './coinsList.json';

class Coins extends Component {

    state = {
        coinsList: Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key])
    };

    render() {
        const { search } = this.state;

        return (
            <div className='main'>

                <Header />

                <Search />

                <ul className='coins-list'>
                    {
                        Object.entries(this.state.coinsList).map( (coin) => {
                            const coinVariable = coin[1];
                            return <Coin
                                key={ coinVariable['Id'] }
                                id={ coinVariable['Id']  }
                                ImageUrl= { coinVariable['ImageUrl'] }
                                CoinName={ coinVariable['CoinName'] }
                                FullName={ coinVariable['FullName'] }
                                Url={ coinVariable['Url'] }
                            />
                        } )
                    }
                </ul>
            </div>
        );
    }
}

export default Coins;
