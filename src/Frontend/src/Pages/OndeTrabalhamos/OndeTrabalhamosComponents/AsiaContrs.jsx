import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import fotobangladesh1 from '../../../assets/img/fotobangladesh1.jpg'
import fotobangladesh2 from '../../../assets/img/fotobangladesh2.jpg'
import fotobangladesh3 from '../../../assets/img/fotobangladesh3.jpg'

import fotoiemen1 from '../../../assets/img/fotoiemen1.jpg'
import fotoiemen2 from '../../../assets/img/fotoiemen2.jpg'
import fotoiemen3 from '../../../assets/img/fotoiemen3.jpg'

import fotogaza1 from '../../../assets/img/fotogaza1.png'
import fotogaza2 from '../../../assets/img/fotogaza2.jpg'
import fotogaza3 from '../../../assets/img/fotogaza3.jpg'

import fotopaquistao1 from '../../../assets/img/fotopaquistao1.jpg'
import fotopaquistao2 from '../../../assets/img/fotopaquistao2.jpg'
import fotopaquistao3 from '../../../assets/img/fotopaquistao3.png'

import fotosiria1 from '../../../assets/img/fotosiria1.jpg'
import fotosiria2 from '../../../assets/img/fotosiria2.jpg'
import fotosiria3 from '../../../assets/img/fotosiria3.jpg'

import fotolibano1 from '../../../assets/img/fotolibano1.jpg'
import fotolibano2 from '../../../assets/img/fotolibano2.png'

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
  display: inline-flex;
  justify-content: center;
  height: 1em;
  align-items: center;
  font-size: 21px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: green;
  padding: 10px;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;

  &:hover{
    cursor: pointer;
    /* background-color: #006300; */
    box-shadow: #000000 -2px 2px 3px;
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

/// Contêiner da imagem com posicionamento absoluto
const ImageContainer = styled.div`
position: relative;
flex: 1;
width: 650px;
height: 450px;
border: 2px solid black;
overflow: hidden;
`;

// Imagem da seção com animação de transição
const SectionImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease; /* Animação de deslize */
  transform: ${({ currentImageIndex }) => `translateX(-${currentImageIndex * 100}%)`};
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
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

function CarrosselDeImagens({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // timer geral para o carrossel
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      
      return () => clearInterval(timer);
    }, [images.length]);
  
    return (
      // carrossel de imagens
      <ImageContainer>
        {images.map((image, index) => (
          <SectionImage
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            currentImageIndex={currentImageIndex}
            style={{
              left: `${index * 100}%`
            }}
          />
        ))}
      </ImageContainer>
    );
  }
  
  // scroll para as seções
  function AfricaContrs() {
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    return (
      <div className="main-content">
        <ContainerSumario>
          <TituloSumario>Ásia:</TituloSumario>
          <TxtSumario onClick={() => scrollToSection('bangladesh')}>Bangladesh</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('gaza')}>Gaza</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('iemen')}>Iemen</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('Líbano')}>Líbano</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('paquistao')}>Paquistão</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('síria')}>Síria</TxtSumario>
        </ContainerSumario>

        {/* //Bangladesh */}
        <SectionContainer id="bangladesh">
        <CarrosselDeImagens images={[fotobangladesh1, fotobangladesh2, fotobangladesh3]} />
          <TextContainer>
            <TipoDeDesastre>Enchentes</TipoDeDesastre>
            <Title>Bangladesh</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
        </SectionContainer>
  
        {/* //gaza */}
        <SectionContainer id="gaza">
          <TextContainer>
            <TipoDeDesastre>Conflito</TipoDeDesastre>
            <Title>Gaza</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
          <CarrosselDeImagens images={[fotogaza1, fotogaza2, fotogaza3]} />
        </SectionContainer>
  
        {/* //iemen */}
        <SectionContainer id="iemen">
          <CarrosselDeImagens images={[fotoiemen1,fotoiemen2,fotoiemen3]} />
          <TextContainer>
            <TipoDeDesastre>Conflito</TipoDeDesastre>
            <Title>Iemen</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
        </SectionContainer>

        {/* //libano*/}
        <SectionContainer id="Líbano">
          <TextContainer>
            <TipoDeDesastre>Conflito</TipoDeDesastre>
            <Title>Líbano</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
          <CarrosselDeImagens images={[fotolibano1, fotolibano2]} />
        </SectionContainer>

        {/* //paquistao*/}
        <SectionContainer id="paquistao">
          <CarrosselDeImagens images={[fotopaquistao1, fotopaquistao2, fotopaquistao3]} />
          <TextContainer>
            <TipoDeDesastre>Enchentes</TipoDeDesastre>
            <Title>Paquistão</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
        </SectionContainer>
  
        {/* //síria*/}
        <SectionContainer id="síria">
          <TextContainer>
            <TipoDeDesastre>Conflito</TipoDeDesastre>
            <Title>Síria</Title>
            <BoldText>Milhares de pessoas no Caribe receberam abrigo emergencial após o furacão Beryl deixar um rastro de devastação nas ilhas.</BoldText>
            <Text>Distribuímos tendas, redes contra mosquitos, luzes solares e kits de cozinha para pessoas desabrigadas em Carriacou e Petite Martinique.</Text>
            <Text>Alguns temem que levará anos até que consigam reconstruir suas casas. É por isso que a ajuda com abrigos emergenciais pode mudar vidas quando as pessoas foram deixadas com tão pouco.</Text>
            <BoldText>O pico da temporada de furacões está chegando. Sua doação hoje pode nos ajudar a responder a desastres ao redor do mundo, onde quer que sejamos necessários.</BoldText>
          </TextContainer>
          <CarrosselDeImagens images={[fotosiria1, fotosiria2, fotosiria3]} />
        </SectionContainer>

      </div>
    );
  }
  
  export default AfricaContrs;
