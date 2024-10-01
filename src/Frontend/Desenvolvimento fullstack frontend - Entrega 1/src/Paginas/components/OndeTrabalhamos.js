import React from 'react';
import './OndeTrabalhamos.css'; 


function OndeTrabalhamos() {
  return (
    <div className="container">
      <div className="left-section">
        <h2>Onde estamos <br /> trabalhamos</h2>
        <p>Pequeno texto sobre onde trabalham</p>
        <div className="buttons">
          <button className="btn-doar">DOAR</button>
          <button className="btn-trabalhamos">Onde trabalhamos</button>
        </div>
      </div>
      <div className="right-section">
        <h3>Conheça mais sobre esses lugares</h3>
        <div className="images">
          <div className="image-circle"><i className="fas fa-camera"></i></div>
          <div className="image-circle"><i className="fas fa-camera"></i></div>
          <div className="image-circle"><i className="fas fa-camera"></i></div>
        </div>
      </div>
    </div>
  );
}

export default OndeTrabalhamos;
