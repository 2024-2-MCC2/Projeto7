import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import image1 from '../../../assets/img/impacthistory.jpg';
import image2 from '../../../assets/img/ondeTrabalhamos.jpg';
import image3 from '../../../assets/img/disatersExplain.jpg';
import image4 from '../../../assets/img/bookClub.jpg';
import image5 from '../../../assets/img/gift.jpg';
import image6 from '../../../assets/img/DreamTeam.jpg';

const CardGrid = styled.div`
  padding: 40px;
`;

const SectionTitle = styled.div`
  margin-bottom: 20px;
  background-color: #1D371B;
  max-width: 100%;
  border-radius: 5px;
  padding: 5px;
  padding-left: 25px;

  h2 {
    color: white;
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 8px;
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
  border-radius: 8px; 
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 20px;
  }

  p {
    margin: 0;
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
  font-size: 15px;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #009867;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

function CardGridComponent() {
  const cards = [
    { title: 'Histórias de impacto', text: 'Conheça as pessoas que seu apoio está ajudando e leia suas histórias poderosas.', image: image1 },
    { title: 'Onde trabalhamos', text: 'Obtenha as atualizações mais recentes para o nosso trabalho e descubra onde estamos apoiando comunidades em todo o mundo após desastres e conflitos.', image: image2 },
    { title: 'Desastres explicados', text: 'Tudo o que você precisa saber sobre desastres – desde eventos climáticos extremos até conflitos complexos.', image: image3 },
    { title: 'Clube do livro', text: 'Saiba mais sobre os livros que lemos, o que nossos membros pensam.', image: image4 },
    { title: 'Deixe um presente', text: 'Traga calma ao caos – deixe um presente em seu testamento e ajude as comunidades a se reconstruírem após o desastre.', image: image5 },
    { title: 'Faça parte do time', text: 'Faça parte da equipe da ShelterBox e inspire seus clientes, envolva sua equipe e aumente seu desempenho.', image: image6 },
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
              <img src={card.image} alt={card.title} />
            </CardImage>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ButtonWrapper>
                <SaibaMaisBtn>
                  <Link to="/saibamais">Saiba Mais</Link>
                </SaibaMaisBtn>
              </ButtonWrapper>
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
              <img src={card.image} alt={card.title} />
            </CardImage>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ButtonWrapper>
                <SaibaMaisBtn>
                  <Link to="/saibamais">Saiba Mais</Link>
                </SaibaMaisBtn>
              </ButtonWrapper>
            </CardContent>
          </Card>
        ))}
      </CardRow>
    </CardGrid>
  );
}

export default CardGridComponent;
