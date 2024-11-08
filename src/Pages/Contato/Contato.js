import React from 'react';
import ContactBanner from './Contato-Components/ContactBanner'; 
import Formulario from './Contato-Components/Formulario';
import Piece from './Contato-Components/Piece';

function Contato() {
  return (
    <div className="main-content">
      
      
      <ContactBanner />
      <Formulario/>
      <Piece/>
      

      
    </div>
  );
}

export default Contato;
