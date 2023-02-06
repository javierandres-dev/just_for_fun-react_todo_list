import './styles/Footer.css';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Built by
        <a
          href='http://javierandres.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='' alt='logo' />
        </a>
      </p>
      <p>
        <span>&copy;</span>
        <span>2023</span>
      </p>
      <p>
        Found a bug or have an idea?{' '}
        <a
          href='http://javierandres.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          Contact me
        </a>
        .
      </p>
    </footer>
  );
};
