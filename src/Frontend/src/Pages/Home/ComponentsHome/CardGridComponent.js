import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../ComponentsGerais/ScrollToTop';
import HistoriaCard from './HistoriaCard'

import image1 from '../../../assets/img/impacthistory.jpg';
import image2 from '../../../assets/img/ondeTrabalhamos.jpg';
import image3 from '../../../assets/img/disatersExplain.jpg';
import image4 from '../../../assets/img/bookClub.jpg';
import image5 from '../../../assets/img/gift.jpg';
import image6 from '../../../assets/img/DreamTeam.jpg';

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
  font-size: 23px;
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
    { title: 'Onde trabalhamos', text: 'Textinho sobre', link:'/ondetrabalhamos' },
    { title: 'Desastres explicados', text: 'Textinho sobre' },
    { title: 'Faça parte do time', text: 'Textinho sobre' }
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
