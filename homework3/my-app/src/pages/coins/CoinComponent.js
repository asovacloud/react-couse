import React from 'react';

import { CRYPTO_COMPARE_URL } from './constants';

import PropTypes from 'prop-types';

function Coins( props ) {
    return (
        <>
            <li>
                <a href={ CRYPTO_COMPARE_URL + '/' + props.Url } target='_blank' rel="noopener noreferrer">
                    <div className='coins-list__image'>
                        <img src={ CRYPTO_COMPARE_URL + props.ImageUrl } width='300' height='300' alt={ props.CoinName } />
                        </div>
                        <div className="coins-list__title">
                        <h3>{ props.FullName }</h3>
                    </div>
                </a>
            </li>
        </>
    );
}

Coins.propTypes = {
    'Url': PropTypes.string.isRequired,
    'CoinName': PropTypes.string.isRequired,
    'FullName': PropTypes.string.isRequired
};

export default Coins;