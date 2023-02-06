import './styles/Button.css';
import React from 'react';

export const Button = ({ styles, content, handleClick }) => {
  return (
    <button className={styles} onClick={handleClick}>
      {content}
    </button>
  );
};
