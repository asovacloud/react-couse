import React from 'react';

function Search() {
    return (
        <form action="#" className='search-coins'>
            <label htmlFor="text-coin">Search</label>
            <input type="text" placeholder='Search coins' id="text-coin" />
            <button>Search</button>
        </form>
    );
}

export default Search;