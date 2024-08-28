import React, { useState, useMemo, useRef, useEffect } from 'react';
import DropdownButton from '../DropdownButton/DropdownButton';
import DropdownContent from '../DropdownContent/DropdownContent';
import DropdownItem from '../DropdownItem/DropdownItem';
import './Dropdown.css';

const Dropdown = ({ buttonText, content, onSelect, searchEnabled, expandUpward,showTick }) => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  const handleSelect = (item) => {
    onSelect(item);
    setSearchText(item.text);
    if (!showTick) { // Close dropdown if showTick is not enabled
      setOpen(false);
    }
  };

  const filteredItems = useMemo(() => {
    if (showTick) {
      return content; // Show all items if showTick is enabled
    }
    const lowercasedFilter = searchText.toLowerCase();
    return content.filter((item) => item.text.toLowerCase().includes(lowercasedFilter));
  }, [content, searchText,showTick]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='dropdown' ref={dropdownRef}>
      <DropdownButton 
        toggle={toggleDropdown} 
        open={open} 
        searchText={searchText} 
        setSearchText={setSearchText} 
        searchEnabled={searchEnabled}
      >
        {buttonText}
      </DropdownButton>
      {open && (
        <DropdownContent open={open} expandUpward={expandUpward}>
          {filteredItems.map((item, id) => (
            <DropdownItem key={id} onClick={() => handleSelect(item)} 
            isSelected={item.text === searchText} // Check if the item is selected
            icon={item.icon}
            showTick={showTick}
            disabled={item.disabled}>
              {item.text}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </div>
  );
};

export default Dropdown;