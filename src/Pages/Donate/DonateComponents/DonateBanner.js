import React from 'react';
import DonateBannerImagem from '../../../assets/img/Donate-banner.jpg'; 
import styled from 'styled-components';

const Donate = () => {
  return (
    <Container>
      <DonateText>
        <Title>Doe Agora</Title>
        <SubTitle>Reconstrua casas e transforme vidas</SubTitle>
      </DonateText>
      <DonateImage>
        <img src={DonateBannerImagem} alt="Imagem representativa de doação" />
      </DonateImage>
    </Container>
  );
};

export default Donate;

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccffcc;
  padding: 20px;
  border-radius: 8px;
  max-width: 1900px;
  margin: 20px auto;
`;

const DonateText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 4em;
  color: #004c3f;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5em; /* Corrigido o valor do fontSize */
  color: #004c3f;
`;

const DonateImage = styled.div`
  width: 800px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #ddd;
  }
`;
