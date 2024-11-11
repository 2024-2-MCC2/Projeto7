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

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

// Componente principal
function ShelterBoxComponent() {
  return (
    <ShelterBox>
      <TextSection>
        <h3>Sobre o ShelterBox</h3>
        <p>Texto sobre o shelter box</p>
      </TextSection>
      <VideoSection>
        <VideoPlaceholder>
          <img src="link-da-imagem-do-video" alt="Vídeo sobre ShelterBox" />
        </VideoPlaceholder>
      </VideoSection>
    </ShelterBox>
  );
}

export default ShelterBoxComponent;
