import React from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #DFF6F0;
  border-radius: 10px;
`;

const LeftSection = styled.div`
  max-width: 50%;
`;

const Title = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

const Text = styled.p`
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const BtnDoar = styled.button`
  background-color: #E74C3C;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

const BtnTrabalhamos = styled.button`
  background-color: #1ABC9C;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #16a085;
  }
`;

const RightSection = styled.div`
  max-width: 50%;
  background-color: #1ABC9C;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
`;

const RightTitle = styled.h3`
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #D0D0D0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Componente principal
const OndeTrabalhamos = () => {
  return (
    <Container>
      {/* Seção Esquerda */}
      <LeftSection>
        <Title>Onde estamos <br /> trabalhamos</Title>
        <Text>Pequeno texto sobre onde trabalhamos</Text>
        <Buttons>
          <BtnDoar>DOAR</BtnDoar>
          <BtnTrabalhamos>Onde trabalhamos</BtnTrabalhamos>
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
