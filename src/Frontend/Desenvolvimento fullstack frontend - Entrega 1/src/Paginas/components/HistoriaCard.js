import React from 'react';
import './HistoriaCard.css'; 
function HistComponent() {
  return (
    <div className="hist-component">
      <div className="image-section">
        <img src="link-da-imagem" alt="História" className="hist-image" />
      </div>
      <div className="text-section">
        <h3>História "X"</h3>
        <p>
          Pequeno texto da história x texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto.
        </p>
        <button className="saiba-mais-btn">SAIBA MAIS</button>
      </div>
    </div>
  );
}

export default HistComponent;
