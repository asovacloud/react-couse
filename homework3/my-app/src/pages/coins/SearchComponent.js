import React from 'react';

import './SearchComponent.css';

const Search = function(props) {
    return (
        <form action="#" className="search-coins form">
            <label htmlFor="text-coin">Search</label>
            <div className="input-row">
                <input
                    type="text"
                    placeholder="Search coins"
                    id="text-coin"
                    value={props.search}
                    onChange={props.handler}
                />
            </div>
            <button className="submit">Search</button>
        </form>
    );
};

export default Search;
