import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './DropdownItem.css';

const DropdownItem = ({ children, onClick, icon, isSelected, showTick, disabled }) => {
  return (
    <div 
      className={`dropdown-item ${disabled ? 'disabled' : ''}`} 
      onClick={!disabled ? onClick : undefined}
    >
      {showTick && (
        <div className="tick-icon">
          {isSelected ? <FaCheck style={{ color: 'white' }} /> : <div style={{ width: '20px', height: '20px' }} />}
        </div>
      )}
      {icon && <span className="item-icon">{icon}</span>}
      {children}
    </div>
  );
};

export default DropdownItem;