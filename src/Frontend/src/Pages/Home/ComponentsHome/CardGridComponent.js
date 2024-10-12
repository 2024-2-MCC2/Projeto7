import React from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const CardGrid = styled.div`
  padding: 40px;
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;

  h2 {
    color: white;
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #1f422e;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  h3 {
    margin-bottom: 10px;
  }
`;

const SaibaMaisBtn = styled.button`
  background-color: #00b17d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #009867;
  }
`;

// Componente principal
function CardGridComponent() {
  const cards = [
    { title: 'Histórias de impacto', text: 'Textinho sobre' },
    { title: 'Onde trabalhamos', text: 'Textinho sobre' },
    { title: 'Desastres explicados', text: 'Textinho sobre' },
    { title: 'Clube do livro', text: 'Textinho sobre' },
    { title: 'Deixe um presente', text: 'Textinho sobre' },
    { title: 'Faça parte do time', text: 'Textinho sobre' },
  ];

  return (
    <CardGrid>
      <SectionTitle>
        <h2>Entenda sobre</h2>
      </SectionTitle>
      <CardRow>
        {cards.slice(0, 3).map((card, index) => (
          <Card key={index}>
            <CardImage>
              <img src="link-da-imagem" alt="Ícone" />
            </CardImage>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <SaibaMaisBtn>SAIBA MAIS</SaibaMaisBtn>
            </CardContent>
          </Card>
        ))}
      </CardRow>

      <SectionTitle>
        <h2>Formas de se envolver</h2>
      </SectionTitle>
      <CardRow>
        {cards.slice(3).map((card, index) => (
          <Card key={index}>
            <CardImage>
              <img src="link-da-imagem" alt="Ícone" />
            </CardImage>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <SaibaMaisBtn>SAIBA MAIS</SaibaMaisBtn>
            </CardContent>
          </Card>
        ))}
      </CardRow>
    </CardGrid>
  );
}

export default CardGridComponent;
