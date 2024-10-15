import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #DFF6F0;
  height: 300px;
`;

const LeftSection = styled.div`
  max-width: 50%;
  width: 1500px;
  height: 150px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 40px;
  font-weight: bold;
`;

const Text = styled.p`
  color: #333;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
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
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #16a085;
  }

  a{
    color: white;
    text-decoration: none;
  }
`;

const RightSection = styled.div`
  max-width: 50%;
  width: 100%;
  height: 300px;
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
  width: 180px;
  height: 180px;
  background-color: #D0D0D0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover{
    height: 190px;
    width: 190px;
  }
`;

// Componente principal
const OndeTrabalhamos = () => {
  return (
    <Container>
      {/* Seção Esquerda */}
      <LeftSection>
        <Title>Onde estamos <br /> trabalhamos?</Title>
        <Text>Pequeno texto sobre onde trabalhamos</Text>
        <Buttons>
          <BtnDoar>
            <Link to='/donate'>DOAR</Link>
            </BtnDoar>
          <BtnTrabalhamos>
            <Link to='/ondetrabalhamos'>Onde trabalhamos</Link>
          </BtnTrabalhamos>
        </Buttons>
      </LeftSection>

      {/* Seção Direita */}
      <RightSection>
        <RightTitle>Conheça mais sobre esses lugares</RightTitle>
        <Images>
          <ImageCircle />
          <ImageCircle />
          <ImageCircle />
        </Images>
      </RightSection>
    </Container>
  );
};

export default OndeTrabalhamos;
