import React from 'react';

import { CRYPTO_COMPARE_URL } from './constants';

import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import withLogProps from '../../HOC/withLogProps';

function Coin({ coin, history }) {
    console.log(history);
    return (
        <>
            <li>
                <div className="coins-list__holder">
                    {coin.ImageUrl && (
                        <div
                            className="coins-list__image"
                            onClick={e => {
                                history.push(`/coins/${coin.Id}`);
                            }}>
                            <img
                                src={CRYPTO_COMPARE_URL + coin.ImageUrl}
                                width="300"
                                height="300"
                                alt={coin.CoinName}
                            />
                        </div>
                    )}
                    {coin.FullName && (
                        <div className="coins-list__title">
                            <h3>{coin.FullName}</h3>
                        </div>
                    )}
                </div>
            </li>
        </>
    );
}

Coin.propTypes = {
    coin: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(withLogProps(Coin));
