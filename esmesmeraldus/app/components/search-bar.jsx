import React, { useState } from "react";
import "../styles/search-bar.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the expansion of the search bar

    const handleSearch = () => {
        onSearch(query);
        setIsExpanded(false); // Toggle back to icon after search
    };

    return (
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
            {/* Conditionally render based on whether search bar is expanded */}
            {isExpanded ? (
                <>
                    <input 
                        type="text" 
                        className="search-input"
                        placeholder="Search..." 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                    />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </>
            ) : (
                <SearchRoundedIcon onClick={() => setIsExpanded(true)} />
            )}
        </div>
    );
};

export default SearchBar;