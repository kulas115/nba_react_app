import React from 'react';
import buttonCss from './Button.module.css'

const Button = ({ onClick, children }) => (
  <div className={buttonCss.button}>
    <button onClick={onClick}>
      {children}
    </button>
  </div>
)

export default Button;
