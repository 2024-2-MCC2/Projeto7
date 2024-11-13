import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImpactImage from '../../../assets/img/impacthistory.jpg'

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
  width: 500px;
  height: 300px;
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
  border-radius:10px;
`;

const TitleText = styled.h3`
font-size: 40px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
color: black;
`
const Text = styled.p`
font-size: 22px;
color: black;
font-family:Arial, Helvetica, sans-serif;
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
  border-radius: 5px;
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
        <HistImage src={ImpactImage} alt="História" />
      </ImageSection>
      <div>
        <TitleText>Histórias de impacto</TitleText>
        <Text>
        Conheça as pessoas que seu apoio está ajudando e leia suas histórias poderosas.
        </Text>
        <SaibaMaisBtn>
          <Link onClick={ScrollToTop} to="/historias">Saiba Mais</Link>
        </SaibaMaisBtn>
      </div>
    </HistComponentWrapper>
  );
}

export default HistComponent;
