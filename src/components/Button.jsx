import './styles/Button.css';
import React from 'react';

export const Button = ({ styles, type, content, handleClick }) => {
  return (
    <button type={type} className={styles} onClick={handleClick}>
      {content}
    </button>
  );
};
