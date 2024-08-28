import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './DropdownButton.css';
import SearchBar from '../SearchBar/SearchBar';

const DropdownButton = ({ children, open, toggle, searchText, setSearchText, searchEnabled }) => {
  return (
    <div className={`dropdown-btn ${open ? "button-open" : ""}`}>
      <div className="search-toggle-container" onClick={toggle}>
        <div className="search-icon">
          {open && searchEnabled ? (
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          ) : (
            children
          )}
        </div>
        <span className='toggle-icon'>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
    </div>
  );
};

export default DropdownButton;