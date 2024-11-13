import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import fotomozambique1 from '../../../assets/img/fotomozambique1.jpg'
import fotomozambique2 from '../../../assets/img/fotomozambique2.jpg'
import fotomozambique3 from '../../../assets/img/fotomozambique3.jpg'

import fotocamaroes1 from '../../../assets/img/fotocamaroes1.jpg'
import fotocamaroes2 from '../../../assets/img/fotocamaroes2.jpg'
import fotocamaroes3 from '../../../assets/img/fotocamaroes3.jpg'

import fotoburkina1 from '../../../assets/img/fotoburkina1.jpg'
import fotoburkina2 from '../../../assets/img/fotoburkina2.jpg'
import fotoburkina3 from '../../../assets/img/fotoburkina3.jpg'

import fotoetiopia1 from '../../../assets/img/fotoetiopia1.jpg'
import fotoetiopia2 from '../../../assets/img/fotoetiopia2.jpg'
import fotoetiopia3 from '../../../assets/img/fotoetiopia3.jpg'

import fotochade1 from '../../../assets/img/fotochade1.jpg'
import fotochade2 from '../../../assets/img/fotochade2.jpg'

import fotosomalia1 from '../../../assets/img/fotosomalia1.png'
import fotosomalia2 from '../../../assets/img/fotosomalia2.jpg'
import fotosomalia3 from '../../../assets/img/fotosomalia3.jpg'

import fotomalawi1 from '../../../assets/img/fotomalawi1.jpg'
import fotomalawi2 from '../../../assets/img/fotomalawi2.jpg'
import fotomalawi3 from '../../../assets/img/fotomalawi3.jpg'

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
  function AfricaContrs() {
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    return (
      <div className="main-content">
        <ContainerSumario>
          <TituloSumario>África:</TituloSumario>
          <TxtSumario onClick={() => scrollToSection('burkinafaso')}>Burkina Faso</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('camaroes')}>Camarões</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('chade')}>Chade</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('etiopia')}>Etiópia</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('malawi')}>Malawi</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('moçambique')}>Moçambique</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('somalia')}>Somalia</TxtSumario>
        </ContainerSumario>

        {/* // Burkina Faso */}
<SectionContainer id="burkinafaso">
  <CarrosselDeImagens images={[fotoburkina1, fotoburkina2, fotoburkina3]} />
  <TextContainer>
    <TipoDeDesastre>Conflito</TipoDeDesastre>
    <Title>Burkina Faso</Title>
    <Text>
      Devido ao aumento dos conflitos armados, milhares de famílias foram obrigadas a fugir de suas casas, vivendo em condições extremamente precárias.
    </Text>
    <Text>
      A ShelterBox atua oferecendo <strong>abrigos emergenciais, kits de cozinha e redes contra mosquitos</strong>, ajudando a restaurar a dignidade e a segurança das famílias deslocadas.
    </Text>
    <Text>
      Esse suporte é essencial, pois muitas dessas pessoas enfrentam a falta de abrigo seguro e a escassez de recursos básicos.
    </Text>
  </TextContainer>
</SectionContainer>

{/* // Camarões */}
<SectionContainer id="camaroes">
  <TextContainer>
    <TipoDeDesastre>Crise no Lago Bacia de Chade</TipoDeDesastre>
    <Title>Camarões</Title>
    <Text>
      Em meio à <strong>crise humanitária na Bacia do Lago Chade</strong>, milhares de famílias vivem como refugiados, após serem forçadas a fugir devido à violência e instabilidade.
    </Text>
    <Text>
      Para apoiar essas comunidades vulneráveis, a ShelterBox oferece <strong>tendas, sistemas de purificação de água e luzes solares</strong>, ajudando a reduzir riscos e oferecer um ambiente mais seguro.
    </Text>
    <Text>
      Este apoio permite que as famílias enfrentem as adversidades com um mínimo de conforto e esperança de recomeço.
    </Text>
  </TextContainer>
  <CarrosselDeImagens images={[fotocamaroes1, fotocamaroes2, fotocamaroes3]} />
</SectionContainer>

{/* // Chade */}
<SectionContainer id="chade">
  <CarrosselDeImagens images={[fotochade1, fotochade2]} />
  <TextContainer>
    <TipoDeDesastre>Conflito</TipoDeDesastre>
    <Title>Chade</Title>
    <Text>
      Com a contínua violência, milhares de pessoas no Chade vivem deslocadas, enfrentando condições severas e sem acesso a itens essenciais.
    </Text>
    <Text>
      A ShelterBox trabalha fornecendo <strong>abrigos temporários e equipamentos de higiene</strong> para ajudar as famílias a superarem os impactos físicos e emocionais do deslocamento.
    </Text>
    <Text>
      Esse auxílio é fundamental para que as famílias tenham um lugar seguro enquanto enfrentam o trauma e a incerteza.
    </Text>
  </TextContainer>
</SectionContainer>

{/* // Etiópia */}
<SectionContainer id="etiopia">
  <TextContainer>
    <TipoDeDesastre>Conflito e Seca</TipoDeDesastre>
    <Title>Etiópia</Title>
    <Text>
      A combinação de conflitos e seca devastadora deixou milhões de pessoas sem acesso a moradia e recursos básicos.
    </Text>
    <Text>
      A ShelterBox provê <strong>tendas e filtros de água</strong>, auxiliando essas famílias a lidar com a falta de recursos e a insegurança alimentar.
    </Text>
    <Text>
      Esse apoio reduz o sofrimento e permite que as comunidades enfrentem os desafios da crise ambiental e humanitária.
    </Text>
  </TextContainer>
  <CarrosselDeImagens images={[fotoetiopia1, fotoetiopia2, fotoetiopia3]} />
</SectionContainer>

{/* // Malawi */}
<SectionContainer id="malawi">
  <CarrosselDeImagens images={[fotomalawi1, fotomalawi2, fotomalawi3]} />
  <TextContainer>
    <TipoDeDesastre>Enchentes</TipoDeDesastre>
    <Title>Malawi</Title>
    <Text>
      As recentes enchentes deixaram milhares de pessoas desabrigadas, destruindo comunidades inteiras e colocando as famílias em situação de extrema necessidade.
    </Text>
    <Text>
      Para ajudar, a ShelterBox fornece <strong>kits de cozinha, abrigos temporários e luzes solares</strong>, oferecendo às famílias um ponto de partida para recomeçar.
    </Text>
    <Text>
      Esse suporte imediato é crucial para a recuperação e segurança das famílias afetadas.
    </Text>
  </TextContainer>
</SectionContainer>

{/* // Moçambique */}
<SectionContainer id="moçambique">
  <TextContainer>
    <TipoDeDesastre>Conflito</TipoDeDesastre>
    <Title>Moçambique</Title>
    <Text>
      O aumento da violência forçou milhares de pessoas a deixar suas casas, deixando famílias em Moçambique em situações de vulnerabilidade.
    </Text>
    <Text>
      A ShelterBox oferece <strong>abrigos emergenciais e redes de proteção contra mosquitos</strong>, fornecendo um refúgio seguro para aqueles que perderam tudo.
    </Text>
    <Text>
      Este apoio é essencial para proporcionar segurança e esperança durante tempos difíceis.
    </Text>
  </TextContainer>
  <CarrosselDeImagens images={[fotomozambique1, fotomozambique2, fotomozambique3]} />
</SectionContainer>

{/* // Somália */}
<SectionContainer id="somalia">
  <CarrosselDeImagens images={[fotosomalia1, fotosomalia2, fotosomalia3]} />
  <TextContainer>
    <TipoDeDesastre>Conflito e Seca</TipoDeDesastre>
    <Title>Somália</Title>
    <Text>
      A Somália enfrenta uma crise humanitária complexa devido ao conflito e à seca prolongada, deixando milhões de pessoas sem acesso a abrigos e água limpa.
    </Text>
    <Text>
      A ShelterBox responde com <strong>abrigos, filtros de água e kits de higiene</strong>, ajudando as famílias a sobreviverem e enfrentarem a insegurança diária.
    </Text>
    <Text>
      Esse apoio é vital para aliviar as condições de vida severas e dar esperança para o futuro.
    </Text>
  </TextContainer>
</SectionContainer>

      </div>
    );
  }
  
  export default AfricaContrs;
