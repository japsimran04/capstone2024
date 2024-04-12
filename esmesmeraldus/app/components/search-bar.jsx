// SearchBar component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/search-bar.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/shop?search=${query}`);
        setIsExpanded(false);
    };

    return (
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
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
