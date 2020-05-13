import React from 'react';
import classNames from 'classnames';
import './MovieItem.css';

const MovieItem = props => {
  const {
    movie,
    deleteHandle,
    addMovieToWillWatch,
    deleteMovieFromWillWatch,
    movieWillWatchState,
  } = props;

  const btnWillWatchClasses = classNames({
    btn: true,
    'btn-success': !movieWillWatchState,
    'btn-secondary': movieWillWatchState,
  });

  return (
    <div className="card border-muted">
      <div className="card_img-holder">
        <img
          className="card__img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path
            || movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{ movie.title }</h4>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="mb-0">Rating: {movie.vote_average}</div>
          <button type = "button"
            className = { btnWillWatchClasses }
            onClick = {() => {
              movieWillWatchState
                ? deleteMovieFromWillWatch(movie)
                : addMovieToWillWatch(movie);
            }} >
            { movieWillWatchState ? 'Remove to Watch' : 'Add to Watch' }
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

export default MovieItem;