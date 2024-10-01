import React from 'react';
import './SliderComponent.css'; 

function SliderComponent() {
  return (
    <div className="slider-container">
      
      <div className="slider-content">
        <div className="camera-icon">
          <i className="fas fa-camera"></i>
        </div>
      </div>

      
      <div className="navigation-buttons">
        <button className="btn-anterior">Anterior</button>
        <button className="btn-proximo">Próximo</button>
      </div>
    </div>
  );
}

export default SliderComponent;
