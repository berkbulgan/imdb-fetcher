import classes from "./SearchBar.module.scss";
import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => { //two way binding
        setSearchTerm(event.target.value);
    }

    const handleEnter = (event) => { //if pressed key is enter then call search function
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = (event) => { //call search function from parent component
        props.searchTerm(searchTerm);
    };

    return ( 
        <div className={classes.SearchBar}>
            <input type="text" placeholder="Search for a movie. You can use movie title or IMDb Movie ID" value={searchTerm} onChange={handleChange} onKeyDown={handleEnter}/>
            <button onClick={handleSearch}>🔎</button>
        </div>
     );
}
 
export default SearchBar;