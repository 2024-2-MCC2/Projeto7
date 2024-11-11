import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../ComponentsGerais/ScrollToTop';
import HistoriaCard from './HistoriaCard'

// Estilos usando styled-components
const CardGrid = styled.div`
  /* padding: 40px; */
`;

const SectionTitle = styled.div`
  /* margin-bottom: 20px; */
  background-color: #1D371B;
  max-width: 100%;
  padding: 5px;
  padding-left: 25px;

  h2 {
    color: white;
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 40px; */
  background-color: #1f422e;
`;

const Card = styled.div`
  color: white;
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardImage = styled.div`
  width: 250px;
  height: 250px;
  background-color: #ccc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  height: 150px;
  width: 250px;
  
  h3 {
  font-size: 23px;
  }
`;

const SaibaMaisBtn = styled.button`
  background-color: #00b17d;
  color: white;
  font-size: 22px;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #009867;
  }

  a{
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

// Componente principal
function CardGridComponent() {
  const cards = [
    { title: 'Onde trabalhamos', text: 'Textinho sobre', link:'/ondetrabalhamos' },
    { title: 'Desastres explicados', text: 'Textinho sobre' },
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
          <SaibaMaisBtn>
             <Link onClick={ScrollToTop} to={card.link}>Saiba Mais</Link>
          </SaibaMaisBtn>
            </CardContent>
          </Card>
        ))}
      </CardRow>

      <HistoriaCard/>
    </CardGrid>
  );
}

export default CardGridComponent;
