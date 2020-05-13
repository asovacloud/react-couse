import React, { Fragment } from 'react'

import MovieItem from '../components/MovieItem';
import MovieTabs from '../components/MovieTabs';
import Pagination from 'rc-pagination';

const Homepage = props => {
  const {
    moviesWillWatch,
    sort_by,
    updateSortBy,
    paginationWillUpdate,
    current_page,
    total_pages,
    movies,
    deleteHandle,
    deleteMovieFromWillWatch,
    addMovieToWillWatch,
    prevPage,
    nextPage,
  } = props;
  return (
    <Fragment>
      <h1 className="mb-4">Homepage</h1>
      <div className="row mb-4">
        <div className="col-12">
          <MovieTabs updateSortBy={ updateSortBy } sort_by={ sort_by } />
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
              onChange={ paginationWillUpdate }
              defaultCurrent={ current_page }
              current={ current_page }
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
                deleteHandle={ deleteHandle }
                deleteMovieFromWillWatch={ deleteMovieFromWillWatch }
                addMovieToWillWatch={ addMovieToWillWatch }
                movieWillWatchState={ movieWillWatchState !== -1 }
              />
            </div>
            })
          }
          </div>
          <div className="row ml-0 mb-4 d-flex align-items-center">
            {
              (current_page > 1) && <button className="btn btn-info btn-xs" onClick={ prevPage }>Prev</button>
            }
            {
              (current_page < total_pages) && <button className="btn btn-info btn-xs ml-1" onClick={ nextPage }>Next</button>
            }
            <div className="current-info ml-3">{ current_page }/{ total_pages }</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export { Homepage };
