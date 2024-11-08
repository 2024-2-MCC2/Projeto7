import React, { useState } from 'react';
import styled from 'styled-components';

// Estilizando o contêiner do carrossel
const CarouselContainer = styled.div`
  width: 700px; // Largura do carrossel
  overflow: hidden; // Oculta elementos que estão fora da área visível
  position: relative; // Para posicionar os botões corretamente
`;

// Estilizando a lista de itens do carrossel
const CarouselList = styled.div`
  display: flex; // Alinha os itens em uma linha
  transition: transform 0.5s ease; // Efeito de transição suave
  transform: translateX(${props => props.currentIndex * -100}%); // Move a lista de itens
`;

// Estilizando cada item do carrossel
const CarouselItem = styled.div`
  min-width: 700px; // Largura mínima do item
  display: flex;
`;

// Estilizando os botões
const Button = styled.button`
  position: absolute; // Posiciona o botão sobre o carrossel
  top: 50%; // Alinha verticalmente ao centro
  transform: translateY(-50%); // Centraliza o botão verticalmente
  background: rgba(255, 255, 255, 0.8); // Fundo semi-transparente
  border: none; // Remove bordas
  cursor: pointer; // Muda o cursor para indicar que é clicável
  height: 100px;
`;

const LeftButton = styled(Button)`
  left: 10px; // Posiciona à esquerda
`;

const RightButton = styled(Button)`
  right: 10px; // Posiciona à direita
`;

// Componente principal do Carrossel
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para o índice atual

  const nextSlide = () => {
    // Muda para o próximo slide
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    // Muda para o slide anterior
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <CarouselContainer>
      <CarouselList currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            {item}
          </CarouselItem>
        ))}
      </CarouselList>
      <LeftButton onClick={prevSlide}>◀</LeftButton>
      <RightButton onClick={nextSlide}>▶</RightButton>
    </CarouselContainer>
  );
};

export default Carousel;
