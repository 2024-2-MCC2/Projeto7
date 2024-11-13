import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GazaImage from '../../../assets/img/gaza.jpg';
import BangladeshImage from '../../../assets/img/Bangladesh.jpg';
import SyriaImage from '../../../assets/img/Syria.jpg';

import ScrollToTop from '../../../ComponentsGerais/ScrollToTop';

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #DFF6F0;
  height: 400px;
`;

const LeftSection = styled.div`
  max-width: 50%;
  width: 1500px;
  height: 100%;
`;

const Title = styled.h2`
  color: #000;
  font-size: 40px;
  font-weight: bold;
`;

const Text = styled.p`
  color: #333;
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family:Arial, Helvetica, sans-serif;
`;

const Buttons = styled.div`
  display: flex;
  height: 50px;
  gap: 10px;
`;

const BtnDoar = styled.button`
  background-color: #E74C3C;
  color: white;
  font-size: 30px;
  border: none;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
  height: 60px;
  width: 160px;
  border-radius:5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #9c372c;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const BtnTrabalhamos = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ABC9C;
  color: white;
  border: none;
  font-weight: bold;
  height: 60px;
  width: 160px;
  border-radius:5px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #16a085;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const RightSection = styled.div`
  max-width: 50%;
  width: 100%;
  height: 400px;
  background-color: #1ABC9C;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
`;

const RightTitle = styled.h3`
  text-align: left;
  color: white;
  font-size: 25px;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px;
`;

const ImageCircle = styled.div`
  width: 250px;
  height: 250px;
  background-color: #D0D0D0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    height: 260px;
    width: 260px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
  }
`;

// Componente principal
const OndeTrabalhamos = () => {
  return (
    <Container>
      {/* Seção Esquerda */}
      <LeftSection>
        <Title>Onde estamos <br /> trabalhamos?</Title>
        <Text>Neste momento, mais de 100 milhões de pessoas em todo o mundo ficaram desabrigadas por desastres e conflitos. A ShelterBox está trabalhando para mudar isso.

Ao fornecer abrigo de emergência e ferramentas para famílias roubadas de suas casas por desastres, estamos transformando o desespero em esperança.

Queremos ver um mundo onde nenhuma família seja deixada sem abrigo após o desastre. Junte-se a nós.</Text>
        <Buttons>
          {/* Botão "Doar" único */}
          <BtnDoar>
            <Link onClick={ScrollToTop} to='/donate'>DOAR</Link>
          </BtnDoar>
          <BtnTrabalhamos>
            <Link onClick={ScrollToTop} to='/ondetrabalhamos'>Onde trabalhamos</Link>
          </BtnTrabalhamos>
        </Buttons>
      </LeftSection>

      {/* Seção Direita */}
      <RightSection>
        <RightTitle>Conheça mais sobre esses lugares</RightTitle>
        <Images>
          <ImageCircle>
            <img src={GazaImage} alt="Gaza" />
            <div className="text">Conflito em Gaza</div>
          </ImageCircle>
          <ImageCircle>
            <img src={BangladeshImage} alt="Bangladesh" />
            <div className="text">Inundação em Bangladesh</div>
          </ImageCircle>
          <ImageCircle>
            <img src={SyriaImage} alt="Conflito na Siria" />
            <div className="text">Conflito na Siria</div>
          </ImageCircle>
        </Images>
      </RightSection>
    </Container>
  );
};

export default OndeTrabalhamos;
