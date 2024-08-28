import React from 'react';
import './DropdownContent.css';

const DropdownContent = ({ children, open, expandUpward }) => {
  return (
    <div className={`dropdown-content ${open ? "content-open" : ""} ${expandUpward ? "expand-upward" : ""}`}>
      {children}
    </div>
  );
};

export default DropdownContent;