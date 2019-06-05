import React from 'react';

// import { Link } from "react-router-dom";

import { CRYPTO_COMPARE_URL } from './constants';

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

export default Coins;