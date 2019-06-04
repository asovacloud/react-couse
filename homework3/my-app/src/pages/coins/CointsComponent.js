import React from 'react';

import './Coins.css';

import Header from './HeaderComponent';
import Search from './SearchComponent';
import Coin from './CoinComponent';

import coinsData from './coinsList.json';

function Coins() {
    return (
        <div className='main'>

            <Header />

            <Search />

            <ul className='coins-list'>
                {
                    Object.entries(coinsData.Data).map( (coin, i) => {
                        if (i < 10) {
                            const coinVariable = coin[1];
                            console.log( coinVariable );
                            return <Coin
                                id={ coinVariable['Id']  }
                                key={ i }
                                ImageUrl= { coinVariable['ImageUrl'] }
                                CoinName={ coinVariable['CoinName'] }
                                FullName={ coinVariable['FullName'] }
                                Url={ coinVariable['Url'] }
                            />
                        }
                    } )
                }
            </ul>
        </div>
    );
}

export default Coins;