import React from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const HistComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f422e;
  padding: 20px;
  border-radius: 8px;
  color: white;
`;

const ImageSection = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const HistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextSection = styled.div`
  flex: 1;
`;

const SaibaMaisBtn = styled.button`
  background-color: #00b17d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #009867;
  }
`;

// Componente principal
function HistComponent() {
  return (
    <HistComponentWrapper>
      <ImageSection>
        <HistImage src="link-da-imagem" alt="História" />
      </ImageSection>
      <TextSection>
        <h3>História "X"</h3>
        <p>
          Pequeno texto da história x texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto.
        </p>
        <SaibaMaisBtn>SAIBA MAIS</SaibaMaisBtn>
      </TextSection>
    </HistComponentWrapper>
  );
}

export default HistComponent;
