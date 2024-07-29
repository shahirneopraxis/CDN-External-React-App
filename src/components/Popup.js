import React from 'react';
import './Popup.css'

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Hi there!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

