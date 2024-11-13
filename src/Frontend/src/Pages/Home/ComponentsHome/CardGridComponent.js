import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../ComponentsGerais/ScrollToTop';
import HistoriaCard from './HistoriaCard';

import image2 from '../../../assets/img/ondeTrabalhamos.jpg';
import image3 from '../../../assets/img/disatersExplain.jpg';
import image6 from '../../../assets/img/DreamTeam.jpg';

const CardGrid = styled.div`
  /* padding: 40px; */
`;

const SectionTitle = styled.div`
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
  background-color: #1f422e;
`;

const Card = styled.div`
  color: white;
  padding: 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const CardImage = styled.div`
  width: 500px;
  height: 250px;
  background-color: #ccc;
  border-radius: 8px; 
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  height: 300px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 23px;
  }

  p {
    font-size: 22px; 
    line-height: 1.4;
    margin: 10px 0;
    overflow: hidden; 
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  width: 100%;

  &:hover {
    background-color: #009867;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: block; 
    height: 100%; 
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function CardGridComponent() {
  const cards = [
    { title: 'Onde trabalhamos', text: 'Obtenha as atualizações mais recentes para o nosso trabalho e descubra onde estamos apoiando comunidades em todo o mundo após desastres e conflitos.', link:'/ondetrabalhamos', image: image2 },
    { title: 'Desastres explicados', text: 'Tudo o que você precisa saber sobre desastres – desde eventos climáticos extremos até conflitos complexos.', link:'/desastres', image: image3 },
    { title: 'Faça parte do time', text: 'Faça parte da equipe da ShelterBox e inspire seus clientes, envolva sua equipe e aumente seu desempenho.', link:'/façaparte', image: image6 }
  ];

  return (
    <CardGrid>
      <SectionTitle>
        <h2>Entenda sobre</h2>
      </SectionTitle>
      <CardRow>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage>
              <img src={card.image} alt={card.title} />
            </CardImage>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.text}</p>

              <ButtonWrapper>
                <SaibaMaisBtn>
                  <Link onClick={ScrollToTop} to={card.link}>Saiba Mais</Link>
                </SaibaMaisBtn>
              </ButtonWrapper>
            </CardContent>
          </Card>
        ))}
      </CardRow>
      <HistoriaCard/>
    </CardGrid>
  );
}

export default CardGridComponent;
