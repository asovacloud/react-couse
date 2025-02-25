import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Wishlist = props => {
  const {
    moviesWillWatch,
    deleteMovieFromWillWatch,
  } = props;
  return (
    <Fragment>
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
                  <th
                    className="text-center"
                    style={{ whiteSpace: "nowrap" }}
                  ><span className="text-warning">&#9733;</span> Rating</th>
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
                            onClick={ () => deleteMovieFromWillWatch(item) }
                          >&#x2717;</button>
                        </th>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
        }
    </Fragment>
  );
}

export { Wishlist };
