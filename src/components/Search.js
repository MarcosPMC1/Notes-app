import React from "react";
import {BiSearchAlt2} from 'react-icons/bi';

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <BiSearchAlt2 className="search-icons" size='1.3rem' />
            <input 
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text" 
                placeholder="Type to search..." 
                className="inp--search"
            />
        </div>
    );
}

export default Search;