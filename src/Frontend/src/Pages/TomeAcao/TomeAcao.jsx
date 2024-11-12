import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/img/Donate-banner.jpg';
import Image2 from '../../assets/img/arrecadar.jpg';
import Image3 from '../../assets/img/bookClub.jpg';
import Image4 from '../../assets/img/voluntario.jpg';
import Image5 from '../../assets/img/umbrellaCorporation.jpg';

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
`;

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

  &:hover {
    cursor: pointer;
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

// Contêiner da imagem com posicionamento absoluto
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
  display: inline-block;  
  padding: 5px;
  font-size: 25px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  border-radius: 5px;
  word-wrap: break-word; 
  word-break: break-word; 
  line-height: 1.3; 
`;

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

const DonateButton = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px; /* Espaço entre o texto e o botão */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;

const ExternalButton = styled.button`
  background-color:#15AC86;
  color: white;
  font-size: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px; /* Espaço entre o texto e o botão */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #168368;
  }
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
    <ImageContainer>
      {images.map((image, index) => (
        <SectionImage
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          currentImageIndex={currentImageIndex}
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        />
      ))}
    </ImageContainer>
  );
}

// scroll para as seções
function TakeAction() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="main-content">
      <ContainerSumario>
        <TituloSumario>Tome Ação: </TituloSumario>
        <TxtSumario onClick={() => scrollToSection('doação')}>Doação</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('arrecadacao')}>Arrecadação de fundos</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('livro')}>Clube do Livro</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('voluntario')}>Voluntário</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('corp')}>Doação corporativa</TxtSumario>
      </ContainerSumario>

      {/* Seção de Doação */}
      <SectionContainer id="doação">
        <CarrosselDeImagens images={[Image1]} />
        <TextContainer>
          <Title>Doação</Title>
          <TipoDeDesastre>Reconstrua casas e transforme vidas com uma doação para a ShelterBox.</TipoDeDesastre>
          <Text>Você pode fazer uma única doação para apoiar nosso trabalho. Ou registre-se para doações mensais regulares. Doações regulares nos ajudam a manter nossos níveis de materiais de ajuda em todo o mundo. Isso significa que podemos estar prontos quando o próximo desastre ocorrer.</Text>
          <Link to="/donate">
            <DonateButton>Doação</DonateButton>
          </Link>
        </TextContainer>
      </SectionContainer>

      {/* Seção de Arrecadação de Fundos */}
      <SectionContainer id="arrecadacao">
        <TextContainer>
          <Title>Arrecadação de fundos</Title>
          <TipoDeDesastre>Ao ir além e arrecadar fundos para a ShelterBox, você pode nos ajudar a alcançar famílias afetadas por desastres em todo o mundo.</TipoDeDesastre>
          <Text>Você pode querer enfrentar um desafio de arrecadação de fundos ou arrecadar fundos para marcar uma ocasião especial. Independentemente de como você gostaria de arrecadar fundos, temos ideias, ferramentas e recursos, oportunidades de arrecadação de fundos e muito mais para inspirá-lo.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[Image2]} />
      </SectionContainer>

      {/* Seção do Clube do Livro */}
      <SectionContainer id="livro">
        <CarrosselDeImagens images={[Image3]} />
        <TextContainer>
          <Title>Junte-se ao nosso Clube do Livro</Title>
          <TipoDeDesastre>Sem livros comuns, não é um clube qualquer.</TipoDeDesastre>
          <Text>Com o clube do livro ShelterBox, você receberá um novo livro para ler a cada seis semanas. Os livros são votados por nossos membros e inspirados nos lugares onde trabalhamos. As assinaturas mensais custam £ 10, e o dinheiro arrecadado apóia nosso trabalho de levar abrigo de emergência para as pessoas que precisam.</Text>
         {/* Novo botão para link externo */}
         <a href="https://shelterbox.org/book-club/" target="_blank" rel="noopener noreferrer">
            <ExternalButton>Junte-se agora ao clube</ExternalButton>
          </a>
        </TextContainer>
      </SectionContainer>

      {/* Seção de Voluntário */}
      <SectionContainer id="voluntario">
        <TextContainer>
          <Title>Voluntário</Title>
          <TipoDeDesastre>Faça parte da ação com a ShelterBox sendo voluntário conosco.</TipoDeDesastre>
          <Text>Nossos voluntários são uma parte fundamental da equipe da ShelterBox. Eles fornecem suporte em todo o mundo e mostram o trabalho que fazemos. Saiba mais sobre as funções de voluntariado que temos disponíveis e junte-se a nós para fazer a diferença para as pessoas sem abrigo.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[Image4]} />
      </SectionContainer>

      {/* Seção de Doação Corporativa */}
      <SectionContainer id="corp">
        <CarrosselDeImagens images={[Image5]} />
        <TextContainer>
          <Title>Doação corporativa</Title>
          <TipoDeDesastre>Faça parte da equipe da ShelterBox por meio de sua organização.</TipoDeDesastre>
          <Text>Há muitas maneiras pelas quais sua empresa pode apoiar o trabalho da ShelterBox. Envolva sua equipe por meio de arrecadação de fundos, aumente seu desempenho com dias de treinamento e inspire seus clientes trabalhando com uma instituição de caridade internacional líder em ajuda humanitária.</Text>
        </TextContainer>
      </SectionContainer>
    </div>
  );
}

export default TakeAction;
