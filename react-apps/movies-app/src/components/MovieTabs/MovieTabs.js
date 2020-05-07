import React, { Component } from 'react';
import classNames from 'classnames';

export default class MovieTabs extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.sort_by !== this.props.sort_by);
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => () => {
      updateSortBy(value);
    };

    const getClassByValue = value => {
      return classNames({
        'nav-link': true,
        'active': sort_by === value
      });
    };

    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <div
            className={ getClassByValue('popularity.desc') }
            onClick={ handleClick('popularity.desc') }
          >
            Popularity desc
          </div>
        </li>
        <li>
          <div
            className={ getClassByValue('revenue.desc')}
            onClick={ handleClick('revenue.desc') }
            >
            Revenue desc
          </div>
        </li>
        <li>
          <div
            className={ getClassByValue('vote_average.desc') }
            onClick={ handleClick('vote_average.desc') }
            >
            Vote avetage desc
          </div>
        </li>
      </ul>
    );

  }
}