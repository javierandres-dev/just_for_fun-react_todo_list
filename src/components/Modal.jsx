import './styles/Modal.css';
import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ isOpenModal, closeModal, children }) => {
  const handleClick = (e) => e.stopPropagation();

  return createPortal(
    <React.StrictMode>
      <div
        className={`modal ${isOpenModal && 'modal-open'}`}
        onClick={closeModal}
      >
        <div className='modal-container' onClick={handleClick}>
          <div className='modal-close' onClick={closeModal}>
            Close
          </div>
          <div className='modal-content'>{children}</div>
        </div>
      </div>
    </React.StrictMode>,
    document.getElementById('modal')
  );
};
