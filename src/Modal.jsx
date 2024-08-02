import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, setIsOpen, corpsHtml, text }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {corpsHtml ? corpsHtml : <p>{text}</p>}
        <button onClick={() => setIsOpen(false)} className="close">Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  corpsHtml: PropTypes.node,
  text: PropTypes.string
};

export default Modal;
