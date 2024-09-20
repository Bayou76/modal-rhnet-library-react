import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Le composant Modal affiche une fenêtre modale personnalisable.
 *
 * @param {boolean} isOpen - Contrôle la visibilité de la modale. Si `true`, la modale s'affiche ; si `false`, elle est masquée.
 * @param {function} setIsOpen - Fonction utilisée pour fermer la modale en modifiant l'état `isOpen`.
 * @param {ReactNode} corpsHtml - Contenu HTML personnalisé à afficher dans la modale. Si non fourni, un texte de remplacement sera affiché.
 * @param {string} text - Texte de remplacement à afficher dans la modale si `corpsHtml` n'est pas fourni.
 */
const Modal = ({ isOpen, setIsOpen, corpsHtml, text }) => {
  // Si la modale n'est pas ouverte (isOpen est false), la fonction retourne null et rien ne s'affiche.
  if (!isOpen) return null;

  return (
    // La modale
    <div className="modal">
      <div className="modal-content">
        {/* Si du contenu HTML personnalisé est fourni (corpsHtml), il est affiché, sinon, le texte de remplacement (text) est affiché */}
        {corpsHtml ? corpsHtml : <p>{text}</p>}
        {/* Bouton pour fermer la modale en appelant la fonction setIsOpen(false) */}
        <button onClick={() => setIsOpen(false)} className="close">Close</button>
      </div>
    </div>
  );
};

// Définition des types de propriétés attendues avec PropTypes
Modal.propTypes = {
  /** Boolean pour contrôler la visibilité de la modale */
  isOpen: PropTypes.bool.isRequired,
  /** Fonction pour fermer la modale */
  setIsOpen: PropTypes.func.isRequired,
  /** Contenu HTML personnalisé optionnel à afficher dans la modale */
  corpsHtml: PropTypes.node,
  /** Texte de remplacement à afficher si le contenu HTML n'est pas fourni */
  text: PropTypes.string
};

export default Modal;
