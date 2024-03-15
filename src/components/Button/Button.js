import React from 'react';

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

function Button(props) {
  const { onClick, children, style } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} style={{ ...buttonStyle, ...style }}>
      {children}
    </button>
  );
}

export default Button;
