import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../ComponentsGerais/ScrollToTop';

// Estilos usando styled-components
const HistComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  padding: 20px;
  color: white;
  height: 300px;
`;

const ImageSection = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const HistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleText = styled.h3`
font-size: 40px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
color: black;
`
const Text = styled.p`
font-size: 23px;
color: black;
`

const SaibaMaisBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b17d;
  color: white;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  padding: 10px 20px;
  border-radius: 2px;
  height: 60px;
  width: 160px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #009867;
  }

  a{
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

// Componente principal
function HistComponent() {
  return (
    <HistComponentWrapper>
      <ImageSection>
        <HistImage src="link-da-imagem" alt="História" />
      </ImageSection>
      <div>
        <TitleText>História "X"</TitleText>
        <Text>
          Pequeno texto da história x texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto.
        </Text>
        <SaibaMaisBtn>
          <Link onClick={ScrollToTop} to="/saibamais">Saiba Mais</Link>
        </SaibaMaisBtn>
      </div>
    </HistComponentWrapper>
  );
}

export default HistComponent;
