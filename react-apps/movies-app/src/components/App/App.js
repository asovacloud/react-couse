import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import {
  NotFound,
  Wishlist,
  Homepage,
} from '../../pages';

import "rc-pagination/assets/index.css";
import {
  API_URL,
  API_KEY_3
} from '../../utils/api';

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
            <div className="container">
              <Wishlist
                moviesWillWatch={ moviesWillWatch }
                deleteMovieFromWillWatch={ this.deleteMovieFromWillWatch }
              />
            </div>
          </Route>
          <Route path="/react-couse" exact>
            <div className="container">
              <Homepage
                moviesWillWatch={ moviesWillWatch }
                sort_by={ sort_by }
                current_page={ current_page }
                total_pages={ total_pages }
                movies={ movies }
                updateSortBy={ this.updateSortBy }
                paginationWillUpdate={ this.paginationWillUpdate }
                deleteHandle={ this.deleteHandle }
                deleteMovieFromWillWatch={ this.deleteMovieFromWillWatch }
                addMovieToWillWatch={ this.addMovieToWillWatch }
                prevPage={ this.prevPage }
                nextPage={ this.nextPage }
              />
            </div>
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App;