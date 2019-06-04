import React from 'react';

function Coins( props ) {
    return (
        <>
            <li>
                <a href={ "https://www.cryptocompare.com"+ props.Url } target='_blank'>
                    <div className='coins-list__image'>
                        <img src={ "https://www.cryptocompare.com/"+ props.ImageUrl } width='300' height='300' alt={ props.CoinName } />
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