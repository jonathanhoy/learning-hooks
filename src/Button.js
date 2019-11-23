import React from 'react';

const Button = ({handleClick, symbol}) => {
  return (
  <button onClick={handleClick}>{symbol}</button>
  )
}

export default Button