import React from 'react';
import classNames from 'classnames';

const MovieTabs = props => {

  const { sort_by, updateSortBy } = props;

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
    <ul class="nav nav-pills">
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

export default MovieTabs;