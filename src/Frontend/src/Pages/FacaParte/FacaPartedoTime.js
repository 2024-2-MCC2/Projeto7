import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Imagem1 from '../../../src/assets/img/voluntario.jpg';
import Image2 from '../../assets/img/smile.jpg';
import ImagemEmbaixador from '../../assets/img/embaixador.jpg';  
import ImagemCoordenador from '../../assets/img/batman.jpg';  
import ImagemEquipeResposta from '../../assets/img/equipe.jpg';  

// Componentes de estilo
const Section = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  background-color: ${(props) => (props.backgroundColor || 'aliceblue')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  color: darkgreen;
  font-size: 27px;
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 22px;
  color: #424242;
`;

const ImageContainer = styled.div`
  width: 50%;
  height: auto; 

  img {
    width: 100%;
    height: auto; 
    object-fit: contain; 
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: #bdfcd2;
`;

const OptionBox = styled.div`
  width: 30%;
  padding: 20px;
  background-color: aliceblue;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OptionImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;  
    border-radius: 8px;
  }
`;


const OptionTitle = styled.h3`
  font-size: 22px;
  color: darkgreen;
`;

const OptionDescription = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  width: 150px;
  font-size: 18px;
  background-color: #15AC86;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #108265;
  }
`;

// Componente principal
function FacaPartedoTime() {
  return (
    <div>
      {/* Seção 1 */}
      <Section backgroundColor="aliceblue">
        <TextContainer>
          <Title>Faça parte do time ShelterBox!</Title>
          <Text>Seja um voluntário e amplifique as vozes das pessoas que apoiamos</Text>
        </TextContainer>
        <ImageContainer>
          <img src={Imagem1} alt="Imagem do Time" />
        </ImageContainer>
      </Section>

      {/* Seção 2 */}
      <Section backgroundColor="#dafff7" reverse>
        <TextContainer>
          <Title>Por que se voluntariar com o ShelterBox?</Title>
          <Text>
            Os voluntários da ShelterBox apoiam o trabalho para um futuro onde ninguém está sem abrigo após desastre.
            Alguns ajudam a aumentar a conscientização sobre o trabalho através de palestras e eventos. Os voluntários podem ajudar a apoiar campanhas de arrecadação de fundos e apoiar eventos de captação de recursos.
          </Text>
        </TextContainer>
        <ImageContainer>
          <img src={Image2} alt="Imagem" />
        </ImageContainer>
      </Section>

      {/* Seção 3 */}
      <Section backgroundColor="#bdfcd2" style={{ flexDirection: 'column', textAlign: 'center' }}>
        <Title>Nossos voluntários</Title>
        <Text>
          Cada voluntário da ShelterBox é fundamental para fornecer abrigo para famílias após o desastre, onde quer que estejam no mundo.
          Eles generosamente nos dão suas habilidades, conhecimentos e tempo e são membros vitais da família ShelterBox.
        </Text>
      </Section>

      {/* Seção 4 - Oportunidades de Voluntariado */}
      <OptionsContainer>
        <OptionBox>
          <OptionImage>
            <img src={ImagemEmbaixador} alt="Embaixador ShelterBox" />
          </OptionImage>
          <OptionTitle>Embaixador ShelterBox</OptionTitle>
          <OptionDescription>
            Como embaixador, você amplifica as vozes das pessoas afetadas pelo desastre e aumenta a conscientização na sua comunidade.
          </OptionDescription>
          <ButtonContainer>
            <StyledButton to="https://shelterbox.org/volunteer/ambassadors/">Se inscreva!</StyledButton>
          </ButtonContainer>
        </OptionBox>

        <OptionBox>
          <OptionImage>
            <img src={ImagemCoordenador} alt="Coordenador ShelterBox" />
          </OptionImage>
          <OptionTitle>Coordenadores do Distrito Rotário</OptionTitle>
          <OptionDescription>
            Tornar-se a voz da ShelterBox em seu Distrito, apoiando a parceria com Rotary Clubs e galvanizando o apoio.
          </OptionDescription>
          <ButtonContainer>
            <StyledButton to="https://shelterbox.org/volunteer/rotary-district-coordinators/">Se inscreva!</StyledButton>
          </ButtonContainer>
        </OptionBox>

        <OptionBox>
          <OptionImage>
            <img src={ImagemEquipeResposta} alt="Equipe de Resposta ShelterBox" />
          </OptionImage>
          <OptionTitle>Equipe de Resposta</OptionTitle>
          <OptionDescription>
            Viaje pelo mundo para entregar abrigo e itens essenciais para famílias que mais precisam.
          </OptionDescription>
          <ButtonContainer>
            <StyledButton to="https://shelterbox.org/volunteer/response-team/">Se inscreva!</StyledButton>
          </ButtonContainer>
        </OptionBox>
      </OptionsContainer>
    </div>
  );
}

export default FacaPartedoTime;


