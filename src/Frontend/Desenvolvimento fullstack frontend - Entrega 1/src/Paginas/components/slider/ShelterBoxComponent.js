import React from 'react';
import './ShelterBoxComponent.css'; 

function ShelterBoxComponent() {
  return (
    <div className="shelter-box">
      <div className="text-section">
        <h3>Sobre o ShelterBox</h3>
        <p>Texto sobre o shelter box</p>
      </div>
      <div className="video-section">
        <div className="video-placeholder">
          <img src="link-da-imagem-do-video" alt="Vídeo sobre ShelterBox" />
        </div>
      </div>
    </div>
  );
}

export default ShelterBoxComponent;
