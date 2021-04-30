import React from 'react';
import './Search.css';
const Search = () => {
    return (
        <div className="site-search">
            <input type="search" placeholder="🔍 Search Products"/>
            <button type="button">Search</button>
        </div>
    );
};

export default Search;