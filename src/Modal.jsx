import React, { useState } from 'react';
import './Modal.css'; // Si vous avez des styles CSS

const Modal = ({ isOpen, setIsOpen, corpsHtml, text, isNotification, typeNotification, autoClose }) => {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  if (autoClose) {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000); // Ferme après 5 secondes
  }

  return (
    <div className={`modal ${isNotification ? 'notification' : ''} ${typeNotification}`}>
      <div className="modal-content">
        {text ? <p>{text}</p> : corpsHtml}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
