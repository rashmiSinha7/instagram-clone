import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div style={modalStyles}>
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};
const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    zIndex: 1000
  };

export default Modal;