import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import camaroonImage from '../../../assets/img/historia de camarão.jpg'

// Estilos usando styled-components
const HistComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f422e;
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
`
const Text = styled.p`
font-size: 23px;
`

const SaibaMaisBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b17d;
  color: white;
  font-size: 20px;
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
        <HistImage src={camaroonImage} alt="História" />
      </ImageSection>
      <div>
        <TitleText>Projeto storytelling nos Camarões</TitleText>
        <Text>
          Convidámos pessoas dos Camarões para partilharem as suas experiências e a importância do abrigo para elas. Saiba como co-criamos uma campanha juntos, dando vida às suas histórias.
        </Text>
        <SaibaMaisBtn>
          <Link to="/saibamais">Saiba Mais</Link>
        </SaibaMaisBtn>
      </div>
    </HistComponentWrapper>
  );
}

export default HistComponent;
