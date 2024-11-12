import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import fotoSheena from '../../assets/img/fotoSheena.jpg'
import fotoAnarc from '../../assets/img/fotoAnarc.jpg'
import fotocicloneanarc from '../../assets/img/fotocicloneanarc.jpg'
import fotoajudaanarc from '../../assets/img/fotoajudaanarc.jpg'

//container para o texto introdutório
const IntroContainer = styled.div`
    height: 650px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

const ImgContainer = styled.div`
    border: 2px solid black;
    height: 500px;
    width: 888px;
`

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

//conteudo do texto introdutorio
const TextsIntro = styled.div`
    height: 150px;
`

const TitleIntro = styled.h1`
    font-size: 40px;
    text-align: start;
`

const TextIntro = styled.p`
    font-size: 30px;
`

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
  function Historias() {
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    return (
      <div className="main-content">
        <IntroContainer>
            <TextsIntro>
                <TitleIntro>Histórias Impactantes</TitleIntro>
                <TextIntro>Toda família tem sua história; Veja como sua ajuda faz a diferença!</TextIntro>
            </TextsIntro>
            <ImgContainer>
                <Img src={fotoSheena} alt='foto da sheena'/>
            </ImgContainer>
        </IntroContainer>
        <ContainerSumario>
          <TituloSumario>Histórias:</TituloSumario>
          <TxtSumario onClick={() => scrollToSection('anarc')}>História do Anarc</TxtSumario>
        </ContainerSumario>

        <SectionContainer id="anarc">
        <CarrosselDeImagens images={[fotoAnarc, fotocicloneanarc, fotoajudaanarc]} />
          <TextContainer>
            <TipoDeDesastre>Ciclone - Bangladesh</TipoDeDesastre>
            <Title>Anarc</Title>
            <Text>Anarc mora na União de Deluti, em Bangladesh. <strong>Era uma área que sofreu muitos danos durante o ciclone.</strong> Ele descreveu sua vida antes da tempestade como “aproveitando a aposentadoria, morando sozinho e recebendo apoio de seu filho.”</Text>
            <Text>Quando o ciclone bateu, Anarc foi à um abrigo do governo local. Uma vez que a tempestade passou, ele voltou para casa, imaginando o que restaria. Dos prédios que ele passou, ele disse: “Não estava parecendo bom”. Ele descobriu que sua casa havia sido severamente danificada.</Text>
            <Text>Desde a tempestade, Anarc tem vivido no que restou de sua antiga casa, em um canto que permaneceu intacto. Ele disse que “chegou a uma idade em que não tem nada a perder e nada a reter.”</Text>
            <Text>Anar compartilhou que estava muito agradecido pela a ajuda e abrigo que recebeu: <strong>"Isso me deu esperança, pois agora posso reparar minha casa e viver o resto da minha vida com conforto em vez de desconforto. Muito obrigado por sua gentileza."</strong></Text>
          </TextContainer>
        </SectionContainer>
      </div>
    );
  }
  
  export default Historias;
