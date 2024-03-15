import React from 'react';
import './Button.scss'

function Button(props) {
  const { onClick, children, className } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`primary-button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
