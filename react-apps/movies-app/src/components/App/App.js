import React, { Component } from 'react';
import MovieItem from '../MovieItem';
import MovieTabs from '../MovieTabs';


import { API_URL, API_KEY_3  } from '../../utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc",
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
        });
      });
  }

  deleteHandle = id => {
    const data = this.state.movies.filter(item => item.id !== id);
    this.setState({
      movies: data,
    });
  };

  deleteMovieFromWillWatch = movie => {
    console.log('Delete: ', this.state.moviesWillWatch);
    console.log('Delete 1: ', movie);
    const newData = this.state.moviesWillWatch.filter(el => el.id !== movie.id);
    this.setState({
      moviesWillWatch: newData,
    });
  };

  addMovieToWillWatch = movie => {
    const updateMovieToWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovieToWillWatch,
    });
    console.log(updateMovieToWillWatch);
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value,
    });
  };

  render() {
    const { movies, moviesWillWatch, sort_by } = this.state;
    return (
      <div className="container pt-5">
        <div className="row mb-3">
          <div className="col-12">
            <MovieTabs updateSortBy={ this.updateSortBy } sort_by={ sort_by } />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="row">
            { movies.map(movie => {
                return <div key={ movie.id } className="col-6 mb-4">
                <MovieItem
                  movie={ movie }
                  deleteHandle={ this.deleteHandle }
                  deleteMovieFromWillWatch={ this.deleteMovieFromWillWatch }
                  addMovieToWillWatch={ this.addMovieToWillWatch }
                />
              </div>
              })
            }
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: { moviesWillWatch.length }</p>
          </div>
        </div>
      </div>
    );
  }
};

export default App;