import React, { Component } from 'react';
import MovieItem from '../MovieItem';
import MovieTabs from '../MovieTabs';
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";


import { API_URL, API_KEY_3  } from '../../utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc",
      current_page: 1,
      total_pages: null,
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by
      || prevState.current_page !== this.state.current_page
    ) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.current_page}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          total_pages: data.total_pages,
        });
        console.log("App -> getMovies -> data.results", data)
      });
  }

  deleteHandle = id => {
    const data = this.state.movies.filter(item => item.id !== id);
    this.setState({
      movies: data,
    });
  };

  deleteMovieFromWillWatch = movie => {
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
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value,

      current_page: 1
    });
  };

  prevPage = () => {
    this.setState(state => {
      return { current_page: state.current_page - 1 };
    });
  };

  nextPage = () => {
    this.setState(state => {
      return { current_page: state.current_page + 1 };
    });
  };

  paginationWillUpdate = page => {
    this.setState(state => {
      return { current_page: page };
    });
  }

  render() {
    const { movies, moviesWillWatch, sort_by, total_pages, current_page } = this.state;
    return (
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-12">
            <MovieTabs updateSortBy={ this.updateSortBy } sort_by={ sort_by } />
          </div>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-3 col-md-12">
            <div className="card p-2 mt-lg-5 mb-md-3_ mb-3">Will Watch: { moviesWillWatch.length }</div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row ml-0 d-flex align-items-center">
              <Pagination
                className="ant-pagination"
                onChange={ this.paginationWillUpdate }
                defaultCurrent={ current_page }
                defaultPageSize={ 1 }
                pageSize={ 1 }
                total={ 500 }
              />
            </div>
            <div className="row">
            { movies.map(movie => {
                return <div key={ movie.id } className="col-md-6 mb-4">
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
            <div className="row ml-0 mb-4 d-flex align-items-center">
              {
                (current_page > 1) && <button className="btn btn-info btn-xs" onClick={ this.prevPage }>Prev</button>
              }
              {
                (current_page < total_pages) && <button className="btn btn-info btn-xs ml-1" onClick={ this.nextPage }>Next</button>
              }
              <div className="current-info ml-3">{ current_page }/{ total_pages }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;