import React from 'react';

import './SearchComponent.css';

function Search() {
    return (
        <form action="#" className='search-coins form'>
            <label htmlFor="text-coin">Search</label>
            <div className="input-row">
                <input type="text" placeholder='Search news' id="text-coin" />
            </div>
            <button className='submit'>Search</button>
        </form>
    );
}

export default Search;