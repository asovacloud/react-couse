import React from 'react';
import { shallow } from 'enzyme';
import Coins from './coins/CoinsComponent';
import News from './news/NewsComponent';

test('Coins render correctly', () => {
    const wrapperCoin = shallow(<Coins />);
    const wrapperNews = shallow(<News />);
    expect(true).toEqual(true);
});
