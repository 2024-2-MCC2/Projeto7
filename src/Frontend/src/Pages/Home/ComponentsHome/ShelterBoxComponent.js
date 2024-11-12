import React from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const ShelterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0f7f4;
  padding: 50px;
  /* margin: 20px 0; */
`;

const TextSection = styled.div`
  max-width: 50%;

  h3 {
    font-size: 36px;
    color: #333;
  }

  p {
    font-size: 20px;
    color: #666;
    margin-top: 10px;
  }
`;

const VideoSection = styled.div`
  max-width: 70%;
`;

const VideoPlaceholder = styled.div`
  width: 800px;
  height: 450px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Componente principal
function ShelterBoxComponent() {
  return (
    <ShelterBox>
      <TextSection>
        <h3>Sobre o ShelterBox</h3>
        <p>Texto sobre o ShelterBox, explicando a importância dessa organização que fornece abrigo e ajuda humanitária em momentos de crise.</p>
      </TextSection>
      <VideoSection>
        <VideoPlaceholder>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Ukpl_yM1AKA" 
            title="Vídeo sobre ShelterBox"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoPlaceholder>
      </VideoSection>
    </ShelterBox>
  );
}

export default ShelterBoxComponent;
