import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import fotoSheena from '../../assets/img/fotoSheena.jpg'
import fotoAnarc from '../../assets/img/fotoAnarc.jpg'
import fotocicloneanarc from '../../assets/img/fotocicloneanarc.jpg'
import fotoajudaanarc from '../../assets/img/fotoajudaanarc.jpg'
import fotoGhulam from '../../assets/img/fotoGhulam.jpg'
import fotoGhulamFamilia from '../../assets/img/fotoGhulamFamilia.jpg'
import fotoGhulamFamilia2 from '../../assets/img/fotoGhulamFamilia2.jpg'
import fotoandrew from '../../assets/img/SB_Andrew_Malawi_04-700x525.jpg'
import fotoandrew2 from '../../assets/img/SB_Andrew_Malawi_06-700x525.jpg'
import fotoandrew3 from '../../assets/img/SB_Andrew_Malawi_08-700x525.jpg'
import fotoandrew4 from '../../assets/img/SB_Andrew_Malawi_10-banner-1600x700.jpg'
import samira from '../../assets/img/samira.jpg'
import samirahelp from '../../assets/img/samirahelp.jpg'
import samirafamilia from '../../assets/img/samirafamilia.jpg'

//container para o texto introdutório
const IntroContainer = styled.div`
    height: 650px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

const ImgContainer = styled.div`
    border: 2px solid black;
    height: 500px;
    width: 888px;
`

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

//conteudo do texto introdutorio
const TextsIntro = styled.div`
    height: 150px;
`

const TitleIntro = styled.h1`
    font-size: 40px;
    text-align: start;
`

const TextIntro = styled.p`
    font-size: 30px;
`

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
  function Historias() {
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    return (
      <div className="main-content">
        <IntroContainer>
            <TextsIntro>
                <TitleIntro>Histórias Impactantes</TitleIntro>
                <TextIntro>Toda família tem sua história; Veja como sua ajuda faz a diferença!</TextIntro>
            </TextsIntro>
            <ImgContainer>
                <Img src={fotoSheena} alt='foto da sheena'/>
            </ImgContainer>
        </IntroContainer>
        <ContainerSumario>
          <TituloSumario>Histórias:</TituloSumario>
          <TxtSumario onClick={() => scrollToSection('anarc')}>História do Anarc</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('ghulam')}>História da Ghulam</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('andrew')}>História do Andrew</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('samira')}>História da Samira</TxtSumario>
          <TxtSumario onClick={() => scrollToSection('samira')}>História da Samira</TxtSumario>
        </ContainerSumario>

        <SectionContainer id="anarc">
        <CarrosselDeImagens images={[fotoAnarc, fotocicloneanarc, fotoajudaanarc]} />
          <TextContainer>
            <TipoDeDesastre>Ciclone - Bangladesh</TipoDeDesastre>
            <Title>Anarc</Title>
            <Text>Anarc mora na União de Deluti, em Bangladesh. <strong>Era uma área que sofreu muitos danos durante o ciclone.</strong> Ele descreveu sua vida antes da tempestade como “aproveitando a aposentadoria, morando sozinho e recebendo apoio de seu filho.”</Text>
            <Text>Quando o ciclone bateu, Anarc foi à um abrigo do governo local. Uma vez que a tempestade passou, ele voltou para casa, imaginando o que restaria. Dos prédios que ele passou, ele disse: “Não estava parecendo bom”. Ele descobriu que sua casa havia sido severamente danificada.</Text>
            <Text>Desde a tempestade, Anarc tem vivido no que restou de sua antiga casa, em um canto que permaneceu intacto. Ele disse que “chegou a uma idade em que não tem nada a perder e nada a reter.”</Text>
            <Text>Anarc compartilhou que estava muito agradecido pela a ajuda e abrigo que recebeu: <strong>"Isso me deu esperança, pois agora posso reparar minha casa e viver o resto da minha vida com conforto em vez de desconforto. Muito obrigado por sua gentileza."</strong></Text>
          </TextContainer>
        </SectionContainer>
        <SectionContainer id="ghulam">
          <TextContainer>
            <TipoDeDesastre>Enchente - Paquistão</TipoDeDesastre>
            <Title>Ghulam</Title>
            <Text><strong>"Quando a água da enchente chegou, nossa casa ficou submersa e deixamos a aldeia. Não tínhamos nada para sobreviver, nossos filhos adoeceram, e não tínhamos sequer o suficiente para comprar remédios para eles."</strong></Text>
            <Text>“Esse desastre foi diferente de tudo o que já enfrentamos, aldeias inteiras foram destruídas. Levamos tudo o que conseguimos carregar, mas a maioria de nossos pertences foi perdida.”</Text>
            <Text>Ghulam explicou o quanto essa enchente afetou seu sustento. <strong>“Não temos uma fonte fixa de renda, meu marido é deficiente e trabalha com diárias; depois das enchentes, nem mesmo tínhamos o que comer, as pessoas nos davam um pouco de comida e sobrevivemos com isso. Quando as crianças adoeceram, foi muito difícil para nós. Voltamos para a aldeia, e a ajuda da ShelterBox e da Islamic Relief nos ajudou muito.”</strong></Text>
            <Text>Ghulam e sua família foram beneficiários da assistência financeira da ShelterBox: <strong>“Precisávamos de comida para nossa família, além de roupas para enfrentar o inverno rigoroso.</strong> Pegamos um empréstimo com alguém e o quitamos com o auxílio em dinheiro. Instalei uma bomba manual em casa para minhas filhas, que precisavam caminhar quilômetros sozinhas para buscar água, o que era perigoso.”<br/>
            <br/>“Também compramos cabras, pois perdemos todas na enchente. Vamos usar as cabras que temos agora para começar um negócio e atender às nossas necessidades.”</Text>
          </TextContainer>
        <CarrosselDeImagens images={[fotoGhulam, fotoGhulamFamilia, fotoGhulamFamilia2]} />
        </SectionContainer>
        <SectionContainer id="andrew">
        <CarrosselDeImagens images={[fotoandrew, fotoandrew2, fotoandrew3, fotoandrew4]} />
          <TextContainer>
            <TipoDeDesastre>Enchente - Malawi</TipoDeDesastre>
            <Title>Andrew</Title>
            <Text><strong>Andrew é um mecânico que tinha sua própria oficina no Malawi. No dia da enchente, ele conseguiu escapar para um terreno mais alto. Muitas outras pessoas fizeram o mesmo.</strong></Text>
            <Text>“Esse desastre foi diferente de tudo o que já enfrentamos, aldeias inteiras foram destruídas. Levamos tudo o que conseguimos carregar, mas a maioria de nossos pertences foi perdida.”</Text>
            <Text>“Por volta das 8h, vimos uma grande quantidade de água vinda do rio. Conseguimos escapar, as pessoas daqui conseguiram escapar e ir para lugares mais altos”, disse ele.<br/>
            <br/>
            <strong>Só quatro dias depois a água finalmente baixou o suficiente para avaliar os danos. A enchente havia destruído casas, negócios e uma igreja.</strong></Text>
            <Text><strong>Quando Andrew conseguiu retornar ao seu negócio, encontrou devastação. Sua oficina havia sido submersa pelas enchentes, e as paredes foram levadas. Andrew se deparou com a perspectiva de ter que recomeçar do zero.</strong></Text>
            <Text>“No começo, não vimos os danos, só conseguíamos ver a água. Como aconteceu em 2019, porque essa não é a primeira vez; aconteceu em 2019, quando a água veio desse rio, mas não foi tão grande quanto este ano, essa é a maior que já vi”, disse ele.</Text>
          </TextContainer>
        </SectionContainer>
        <SectionContainer id="samira">
          <TextContainer>
            <TipoDeDesastre>Seca - Chifre da África</TipoDeDesastre>
            <Title>Samira</Title>
            <Text><strong>Devido à estação chuvosa fracassada, surgiu um conflito na região de Samira, o que a forçou a fugir com sua família. Ao descrever sua jornada até o campo de deslocados internos onde estão agora, ela disse: “Ao viajar pela estrada, enfrentamos problemas como sede e fome.”</strong></Text>
            <Text>Adaptar-se à região da Somália não tem sido fácil para Samira e seus filhos.<strong>“Estamos enfrentando desafios desde que chegamos aqui. Às vezes, é difícil se ajustar ao clima, e meus filhos ficam doentes.”</strong></Text>
            <Text>No quinto projeto da ShelterBox na Etiópia, trabalhamos com nossos parceiros da IOM para apoiar 12.000 das pessoas deslocadas mais vulneráveis do país. As pessoas receberam itens como lonas, cordas, bacias, cobertores, esteiras de dormir, redes mosquiteiras e muitos outros. Samira e seus filhos foram uma das famílias que conseguimos ajudar.<br/>
            <br/>
            <strong>“Estou aqui [no campo de deslocados] entre cinco e seis meses. Só recebemos apoio da IOM e da ShelterBox.”</strong></Text>
            <Text><strong>“Quando recebi os itens de vocês, me senti bem. Agora podemos buscar água usando o galão e usar os materiais para nossas necessidades. Recebi duas lonas plásticas que protegem a mim e minha família das condições climáticas severas.”</strong></Text>
            <Text>"Eu espero ter/construir uma casa permanente."</Text>
          </TextContainer>
        <CarrosselDeImagens images={[samira, samirahelp, samirafamilia]} />
        </SectionContainer>
      </div>
    );
  }
  
  export default Historias;
