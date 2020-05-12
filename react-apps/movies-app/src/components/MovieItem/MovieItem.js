import React, { Component } from 'react';
import classNames from 'classnames';

export default class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      willWatch: false
    };
  }

  render() {
    const {
      movie,
      deleteHandle,
      addMovieToWillWatch,
      deleteMovieFromWillWatch,
    } = this.props;

    const { willWatch } = this.state;

    const btnWillWatchClasses = classNames({
      btn: true,
      'btn-success': !willWatch,
      'btn-secondary': willWatch,
    });

    return (
      <div className="card border-primary">
        <img
          className="card__img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path
            || movie.poster_path}`}
          alt=""
        />
        <div className="card-body text-white bg-primary">
          <h4 className="card-title">{ movie.title }</h4>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="mb-0">Rating: {movie.vote_average}</div>
            <button type = "button"
              className = { btnWillWatchClasses }
              onClick = {() => {
                this.setState({
                  willWatch: !willWatch,
                });


                willWatch
                  ? deleteMovieFromWillWatch(movie)
                  : addMovieToWillWatch(movie);


              }} >
              { willWatch ? 'Remove to Watch' : 'Add to Watch' }
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={ deleteHandle.bind(null, movie.id)
          }>Delete</button>
        </div>
      </div>
    );
  }
}