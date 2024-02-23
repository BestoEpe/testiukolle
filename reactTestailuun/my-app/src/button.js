import React from 'react';
import './button.css';

const Button = ({ onClick, buttonStyle, effect, children }) => {
  const handleClick = () => {
    onClick(effect); // Pass the effect to the onClick handler
  };

  return (
    <button className={`button ${buttonStyle}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
