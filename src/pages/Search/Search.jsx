import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import './Search.css';

function Search({ onSearch }) {

  const [query, setQuery] = useState("");

  // When clicking Go or pressing Enter
  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);   // send search keyword to parent
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search-container">
        <h1>
          <FcSearch className="search-icon" />
          <input
            className="tab"
            type="text"
            placeholder="Search here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="butt" onClick={handleSearch}>
            Go
          </button>
        </h1>
      </div>
    </>
  );
}

export default Search;
