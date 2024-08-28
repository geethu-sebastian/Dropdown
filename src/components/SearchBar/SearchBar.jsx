import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchText, setSearchText, onClick }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search..."
      onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing when clicking on input
      className="search-bar"
    />
  );
};

export default SearchBar;