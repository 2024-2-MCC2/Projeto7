import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import fotocaribe from '../../../assets/img/fotocaribe1.jpg'

// Contêiner para o sumário
const ContainerSumario = styled.div`
  background-color: #d1ffce;
  border: 2px solid black;
  padding: 20px;
  margin: 15px 0px;
  display: flex;
  height: 10em;
  gap: 50px;
`;

const TituloSumario = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`

// Texto do sumário
const TxtSumario = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: green;
  max-height: 1em;
  max-width: 4em;
  padding: 10px;
  border-radius: 2px;

  &:hover{
    cursor: pointer;
    /* background-color: #006300; */
    transition: all 0.2s ease-in-out;
    box-shadow: #000000 -2px 2px 2px;
  }
`;

// Contêiner da seção principal
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  padding: 20px;
  background-color: #1f422e;
  color: white;
  margin: 15px 0;
`;

// Contêiner da imagem da seção
const ImageContainer = styled.div`
  flex: 1;
  width: 650px;
  height: 450px;
  border: 2px solid black;
`;

// Imagem da seção
const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Contêiner do texto da seção
const TextContainer = styled.div`
  flex: 2;
  padding-left: 20px;
  border-left: 3px solid lightgreen;
`;

const TipoDeDesastre = styled.h1`
    color: #000000;
    background-color: #15AC86;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 90px;
    height: 20px;
    padding: 5px;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
`

// Título da seção
const Title = styled.h1`
  font-size: 27px;
  text-decoration: underline;
  margin: 0;
  font-weight: bolder;
  margin-bottom: 50px;
`;

// Texto da seção
const Text = styled.p`
  margin-top: 10px;
  font-size: 21px;
  margin-left: 50px;
`;
const BoldText = styled.p`
  margin-top: 10px;
  font-size: 22px;
  margin-left: 50px;
  font-weight: bold;
`;

function AmericaContrs() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const caribbeanImages = [
      fotocaribe,
      "link_da_imagem_caribe_2.jpg",
      "link_da_imagem_caribe_3.jpg"
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === caribbeanImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(timer);
    }, [caribbeanImages.length]);

  // Função para rolar até a seção
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-content">
      <ContainerSumario>
        <TituloSumario>Sumário</TituloSumario>
        <TxtSumario onClick={() => scrollToSection('caribe')}>Caribe</TxtSumario>
      </ContainerSumario>
      
     {/* Seção do Caribe com carrossel */}
     <SectionContainer id="caribe">
        <ImageContainer>
          {caribbeanImages.map((image, index) => (
            <SectionImage
              key={index}
              src={image}
              alt={`Imagem ${index + 1} do Caribe`}
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </ImageContainer>
        <TextContainer>
        <TipoDeDesastre>Furacão</TipoDeDesastre>
          <Title>Caribe</Title>
          <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
          <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
          <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
          <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
        </TextContainer>
      </SectionContainer>
    </div>
  );
}

export default AmericaContrs;
