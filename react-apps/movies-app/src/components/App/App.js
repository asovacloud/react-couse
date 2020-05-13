import React, { Component } from 'react';
import MovieItem from '../MovieItem';
import MovieTabs from '../MovieTabs';
import Pagination from 'rc-pagination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';

import "rc-pagination/assets/index.css";
import { API_URL, API_KEY_3  } from '../../utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      moviesWillWatch: window.localStorage.getItem('moviesWillWatch')
                    ? JSON.parse(window.localStorage.getItem('moviesWillWatch'))
                    : [],
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
      });
  }

  deleteHandle = id => {
    const data = this.state.movies.filter(item => item.id !== id);
    this.setState({
      movies: data,
    });
  };

  deleteMovieFromWillWatch = movie => {
    const updateMovieToWillWatch = this.state.moviesWillWatch.filter(el => el.id !== movie.id);
    this.setState({
      moviesWillWatch: updateMovieToWillWatch,
    });
    window.localStorage.setItem('moviesWillWatch', JSON.stringify(updateMovieToWillWatch));
  };

  addMovieToWillWatch = movie => {
    const updateMovieToWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMovieToWillWatch,
    });
    window.localStorage.setItem('moviesWillWatch', JSON.stringify(updateMovieToWillWatch));
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
    const {
      current_page,
      movies,
      moviesWillWatch,
      sort_by,
      total_pages,
    } = this.state;

    return (
      <Router className="wrapper">
        <div className="navbar navbar-dark bg-dark shadow-sm mb-5 navbar-expand-xl">
          <div className="container d-flex justify-content-between">
            <Link
              className="navbar-brand d-flex align-items-center"
              to='/react-couse'
            >
              <strong>Movies App</strong>
            </Link>
            <nav className="navbar-nav-scroll_ nav-pills">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li className="nav-item">
                  <NavLink
                    to='/react-couse'
                    className="nav-link pl-3 pr-3"
                    activeclass="active"
                    exact
                  >Homepage</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/wishlist"
                    className="nav-link pl-3 pr-3"
                    activeclass="active"
                    exact
                  >Wishlist</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/wishlist">
            <div className="container wishlist">
              <h1 className="mb-4">Wishlist</h1>
              <Link
                className="btn btn-link mb-2"
                to='/react-couse'
              >&#8592; Go home</Link>
              {
                (moviesWillWatch.length === 0) && <p>There is nothing in the wishlist.</p>
              }
              {
                (moviesWillWatch.length > 0) && 
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Title</th>
                        <th className="text-center"><span className="text-warning">&#9733;</span> Rating</th>
                        <th scope="col" className="text-danger text-center">Eject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        moviesWillWatch.map((item, index) => {
                          return (
                            <tr key={ item.id }>
                              <th scope="row">{ index + 1 }</th>
                              <td><div className="wishlist__title">{ item.title }</div></td>
                              <td className="text-center">{ item.vote_average }</td>
                              <th scope="row" className="text-center">
                                <button
                                  date-id="{ item.id }"
                                  className="btn btn-sm btn-danger"
                                  onClick={ () => this.deleteMovieFromWillWatch(item) }
                                >&#x2717;</button>
                              </th>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </table>
              }
            </div>
          </Route>
          <Route path="/react-couse" exact>
            <div className="container">
              <h1 className="mb-4">Homepage</h1>
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
                      total={ total_pages }
                    />
                  </div>
                  <div className="row">
                  { movies.map(movie => {
                      const movieWillWatchState = moviesWillWatch.findIndex(el => {
                        return el.id === movie.id;
                      });
                      console.log("App -> render -> movieWillWatchState", movie.title ,': ', movieWillWatchState);
                      return <div key={ movie.id } className="col-md-6 mb-4">
                      <MovieItem
                        movie={ movie }
                        deleteHandle={ this.deleteHandle }
                        deleteMovieFromWillWatch={ this.deleteMovieFromWillWatch }
                        addMovieToWillWatch={ this.addMovieToWillWatch }
                        movieWillWatchState={ movieWillWatchState !== -1 }
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
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;