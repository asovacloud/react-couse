import React from 'react';

import './CoinsComponent.css';

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
                        if (i < 12) {
                            const coinVariable = coin[1];
                            return <Coin
                                key={ coinVariable['Id'] }
                                id={ coinVariable['Id']  }
                                ImageUrl= { coinVariable['ImageUrl'] }
                                CoinName={ coinVariable['CoinName'] }
                                FullName={ coinVariable['FullName'] }
                                Url={ coinVariable['Url'] }
                            />
                        }

                        return null;
                    } )
                }
            </ul>
        </div>
    );
}

export default Coins;