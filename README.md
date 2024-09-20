# Modal RHNet Library React

Une bibliothèque simple et personnalisable de composant modal pour React.

## Prérequis

- **Node.js**: >= 14.x
- **npm**: >= 6.x (ou **yarn**: >= 1.x)
- **Éditeur recommandé**: Visual Studio Code (ou tout éditeur supportant JavaScript/React)

## Installation

### Avec npm
Pour installer la bibliothèque avec npm, exécutez la commande suivante :

```bash
npm install @Bayou76/modal-rhnet-library-react
```

### Avec yarn
Pour installer la bibliothèque avec yarn, utilisez la commande suivante :

```bash
yarn add @Bayou76/modal-rhnet-library-react
```

## Utilisation

Voici un exemple d'utilisation du composant Modal :

```js
import React, { useState } from 'react';
import Modal from 'modal-rhnet-library-react';

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
      <button onClick={() => setIsOpenClassic(true)}>Ouvrir la modale</button>

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
```

##### Licence

Distribué sous la licence MIT.
