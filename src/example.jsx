import React, { useState } from 'react';
import Modal from './Modal';

const Example = () => {
  const [isOpenClassic, setIsOpenClassic] = useState(false);

  const corpsHtml = (
    <div>
      <h1>Test de la modale</h1>
      <p>MODAL....</p>
    </div>
  );

  return (
    <div>
      <h1>Modal Library</h1>
      <button onClick={() => {
        setIsOpenClassic(true);
      }}>Ouvrir la modale</button>

      <Modal 
        isOpen={isOpenClassic} 
        setIsOpen={setIsOpenClassic} 
        corpsHtml={corpsHtml} 
        text="Ceci est un texte de remplacement"
      />
    </div>
  );
};

export default Example;
