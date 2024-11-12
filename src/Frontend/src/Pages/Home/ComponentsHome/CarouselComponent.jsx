import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from '../../../assets/img/disasterCarrossel.jpg';
import image2 from '../../../assets/img/climateCarrossel.jpg';
import image3 from '../../../assets/img/floodCarrossel.jpg';
import image4 from '../../../assets/img/queimadaCarrossel.jpg';

// Estilização do contêiner do carrossel
const CarouselContainer = styled.div`
  height: 550px;
  width: 750px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

// Estilização para o wrapper das imagens
const ImageWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translateValue}%);
`;

// Estilização para cada imagem
const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  object-fit: cover;
  border-radius: 7px;
`;

// Botões de navegação
const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  color: black;
  font-size: 50px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ;
  box-shadow: 2px 2px 2px black;
  cursor: pointer;
  z-index: 1;
  
&:hover{
    background-color: black;
    color: #ffffff;
    box-shadow: 2px 2px 2px green;
}
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  color: black;
  font-size: 50px;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.2s ;
  box-shadow: 2px 2px 2px black;
  cursor: pointer;
  z-index: 1;

  &:hover{
      background-color: black;
      color: white;
      box-shadow: 2px 2px 2px green;
  }
`;

// Componente de Carrossel
function CarouselComponent() {
  // Lista de imagens
  const images = [image1, image2, image3, image4];

  // Estado para controle do índice atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Valor para translação das imagens
  const translateValue = -(currentIndex * 100);

  return (
    <CarouselContainer>
      <ImageWrapper translateValue={translateValue}>
        {images.map((image, index) => (
          <CarouselImage key={index} src={image} alt={`Imagem ${index + 1}`} />
        ))}
      </ImageWrapper>
      <PrevButton onClick={prevSlide}>‹</PrevButton>
      <NextButton onClick={nextSlide}>›</NextButton>
    </CarouselContainer>
  );
}

export default CarouselComponent;
