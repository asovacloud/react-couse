import React from 'react';
import { shallow } from 'enzyme';

import Coins from './CoinsComponent';

import Coin from './CoinComponent';

import coinsData from './coinsList.json';

const coinsList = Object.keys(coinsData.Data)
    .slice(0, 12)
    .map(key => {
        return coinsData.Data[key];
    });

test('Coins render correctly', () => {
    const wrapperCoin = shallow(<Coins />);
    expect(wrapperCoin).toMatchSnapshot();
});

test('Render correct amount of coins', () => {
    const component = shallow(<Coins />);
    expect(component.find(Coin).length).toEqual(coinsList.length);
});

test('Render correct amount of coins based on search term', () => {
    const component = shallow(<Coins />);
    const searchTerm = 'token';
});
