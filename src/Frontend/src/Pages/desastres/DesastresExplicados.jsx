import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import img1 from '../../assets/img/disasterCarrossel.jpg';
import img2 from '../../assets/img/tsunami.jpg';
import img3 from '../../assets/img/climateCarrossel.jpg';
import img4 from '../../assets/img/queimadaCarrossel.jpg';
import img5 from '../../assets/img/floodCarrossel.jpg';
import img6 from '../../assets/img/uzumaki.jpg';
import img7 from '../../assets/img/daiuzumaki.jpg';
import img8 from '../../assets/img/terremoto.jpg';
import img9 from '../../assets/img/magma.jpg';


const TopContainer = styled.div`
  background-color: #15AC86; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px; 
  text-align: center;
  color: white;
`;

const MainTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 36px; 
  font-weight: bold;
  margin: 0;
`;


const Subtitle = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  margin-top: 10px; 
  line-height: 1.5;
`;
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
  padding: 18px;
  border-radius: 5px;
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
function DesastresExplicados() {
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
        <TopContainer>
      <MainTitle>Desastres explicados</MainTitle>
      <Subtitle>Eventos climáticos severos, como inundações ou secas, ou eventos sísmicos, como vulcões, têm o potencial de se transformar em desastres. E os desastres afetam milhares de pessoas em todo o mundo a cada ano.

De terremotos e tsunamis a conflitos e emergências complexas, esses desastres podem causar mortes, falta de moradia e movimentos populacionais em massa.

Mas por que ocorrem eventos climáticos extremos e o que os transforma em um desastre? Como alguns dos piores conflitos do mundo começaram? Quais são os efeitos devastadores dos desastres e das mudanças climáticas?

Explore nossa série Desastres Explicados para descobrir as respostas para essas perguntas.</Subtitle>
    </TopContainer>
      <ContainerSumario>
        <TituloSumario>Tipos de Desastres:  </TituloSumario>
        <TxtSumario onClick={() => scrollToSection('Deslizamentos')}>Deslizamentos</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('津波')}>Tsunamis</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('ondas')}>Ondas de calor</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('fogo')}>Incêndios</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('aqua')}>Inundações</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('uzumaki')}>Furacões, Ciclones, Tufões</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('daiuzumaki')}>Tornados</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('terra')}>Terremotos</TxtSumario>
        <TxtSumario onClick={() => scrollToSection('magma')}>Vulcões</TxtSumario>
      </ContainerSumario>

      {/* landslides*/}
      <SectionContainer id="Deslizamentos">
        <CarrosselDeImagens images={[img1]} />
        <TextContainer>
          <Title>Deslizamentos</Title>
          <TipoDeDesastre>Deslizamentos de terra matam milhares de pessoas em todo o mundo todos os anos.</TipoDeDesastre>
          <Text>Os deslizamentos de terra são definidos como o movimento de uma massa de rocha, detritos ou terra, normalmente descendo uma encosta. Eles ocorrem quando as forças que puxam a terra ou as rochas para baixo (normalmente a gravidade) excedem as forças que prendem os materiais na encosta.</Text>
          <Text>Deslizamentos de terra podem ser devastadores. Acredita-se que o deslizamento de terra em Papa Nova Guiné em maio de 2024 tenha matado cerca de 2.000 pessoas e destruído 150 casas. Acredita-se que este deslizamento de terra tenha sido causado por semanas de fortes chuvas enfraquecendo a encosta de uma montanha.</Text>
        </TextContainer>
      </SectionContainer>

      {/* tsunamis */}
      <SectionContainer id="津波">
        <TextContainer>
          <Title>Tsunamis 津波</Title>
          <TipoDeDesastre>Eles são raros, geralmente acontecendo cerca de duas vezes por ano, mas podem ter efeitos devastadores. Essas ondas poderosas podem destruir comunidades inteiras e varrer casas, estradas e plantações.</TipoDeDesastre>
          <Text>Um tsunami é uma série de ondas gigantes causadas por terremotos ou erupções vulcânicas submarinas.  

Ele envia uma onda de água para a terra, muitas vezes atingindo alturas de mais de 100 pés. Embora as ondas do tsunami não atinjam grandes alturas nas profundezas do oceano, à medida que entram em águas mais rasas, começam a crescer em energia e altura.

As ondas do tsunami podem rasgar o mar a velocidades de 500 milhas por hora. A profundidade do oceano determina a velocidade – viajando tão rápido quanto um avião a jato em águas profundas e diminuindo a velocidade ao chegar a águas rasas.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[img2]} />
      </SectionContainer>

      {/* ondas de calor*/}
      <SectionContainer id="ondas">
        <CarrosselDeImagens images={[img3]} />
        <TextContainer>
          <Title>Ondas de calor</Title>
          <TipoDeDesastre>Ondas de calor e clima quente intenso podem ser extremamente perigosos para as pessoas.</TipoDeDesastre>
          <Text>Uma onda de calor é um período de clima excepcionalmente quente, geralmente com duração de vários dias,As ondas de calor geralmente ocorrem no verão, quando é mais provável que vejamos sistemas climáticos de alta pressão. Os sistemas de alta pressão forçam o ar para baixo, prendendo o ar quente do solo no lugar. Essa força impede que o ar suba e, como resultado, não há nada que impeça o ar quente de ficar mais quente. O aumento da temperatura do oceano também aumenta o ar quente do solo. Os efeitos combinados são conhecidos como cúpulas de calor.</Text>
          <Text>A Organização Meteorológica Mundial informou que mais de 60.000 pessoas morreram de calor extremo na Europa durante as ondas de calor no verão de 2022. É provável que esta seja uma estimativa conservadora. Isto no contexto em que a Europa tem alguns dos melhores sistemas de alerta precoce e planos de acção para a saúde do calor do mundo. O impacto em áreas menos bem preparadas pode ser ainda mais devastador.

Grupos vulneráveis, como crianças muito pequenas, idosos e pessoas com problemas de saúde existentes, são mais propensos a sofrer os impactos do calor extremo. Isso ocorre porque eles acham mais difícil manter a temperatura corporal central.</Text>
        </TextContainer>
      </SectionContainer>

      {/* Incêndios*/}
      <SectionContainer id="fogo">
        <TextContainer>
          <Title>Incêndios</Title>
          <TipoDeDesastre>A maioria dos incêndios florestais é causada por humanos, com apenas 10-15% deles acontecendo por conta própria na natureza.</TipoDeDesastre>
          <Text>Os incêndios florestais podem queimar rapidamente milhões de acres de terra e destruir tudo - árvores, casas, animais e humanos - em seus caminhos. Famílias e comunidades em áreas rurais de alto risco correm o risco de perder suas casas e ter que fugir para um local seguro. Os incêndios florestais também apresentam grandes riscos à saúde, especialmente para pessoas com problemas respiratórios existentes.</Text>
          <Text>A Organização Mundial da Saúde relatou que a fumaça de incêndios florestais contém uma mistura de poluentes nocivos que são perigosos quando inalados. O material particulado (PM2.5) da fumaça de incêndios florestais está associado a mortes prematuras. Pode causar e exacerbar doenças dos pulmões e coração, cérebro e sistema nervoso, pele, intestino, rins, olhos, nariz e fígado.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[img4]} />
      </SectionContainer>

      {/* Inundações */}
      <SectionContainer id="aqua">
        <CarrosselDeImagens images={[img5]} />
        <TextContainer>
          <Title>Inundações</Title>
          <TipoDeDesastre>As inundações são as mais comuns e generalizadas de todas as catástrofes relacionadas com o clima.

Eles podem destruir casas e devastar comunidades inteiras, deixando para trás um longo rastro de destruição.</TipoDeDesastre>
          <Text>As inundações acontecem quando os níveis de água sobem repentinamente, mais rápido do que o solo pode absorver.

As inundações repentinas são o tipo mais perigoso porque combinam o poder destrutivo de uma inundação com incrível velocidade e imprevisibilidade. Eles destroem edifícios, estradas, pontes e todos os tipos de infraestrutura. Eles podem levar árvores, animais e pessoas.</Text>
        </TextContainer>
      </SectionContainer>

      {/* uzumaki*/}
      <SectionContainer id="uzumaki">
        <TextContainer>
          <Title>Furacões, Ciclones, Tufões</Title>
          <TipoDeDesastre>Furacões, tufões e ciclones são tempestades tropicais. Quando atingem, podem ser destrutivos e até mortais, dependendo de quão poderosos são.</TipoDeDesastre>
          <Text>Alguns dos furacões mais destrutivos ocorreram nos últimos 20 anos, incluindo os furacões Irma e Maria em 2017 e o furacão Katrina em 2005. Os danos combinados desses três furacões são estimados em 317,9 bilhões de dólares. </Text>
          
          <TipoDeDesastre>Qual é a diferença entre um furacão, um tufão e um ciclone?</TipoDeDesastre>
          <Text>Furacões, tufões e ciclones são todas tempestades tropicais.</Text>
          <Text>A única diferença é onde eles se formam. Os furacões se formam no Atlântico tropical e no Oceano Pacífico Oriental. Os tufões se formam no Oceano Pacífico Ocidental e os ciclones se formam ao sul do equador, na costa de lugares como Austrália e Madagascar.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[img6]} />
      </SectionContainer>

       {/* Tornados*/}
       <SectionContainer id="daiuzumaki">
       <CarrosselDeImagens images={[img7]} />
        <TextContainer>
          <Title>Tornados</Title>
          <TipoDeDesastre>Tornados são tempestades extremamente violentas. Quando se formam, podem destruir bairros inteiros, destruindo casas e até matando pessoas.</TipoDeDesastre>
          <Text>Um tornado é uma coluna de ar estreita e violentamente giratória. Geralmente está preso à base de uma tempestade, estendendo-se até o solo.

Mas muitas vezes é difícil vê-lo, porque o vento é invisível. Muitas vezes, forma um funil de condensação que acumulou poeira e detritos. Os tornados estão entre as tempestades mais violentas da natureza, com ventos às vezes chegando a 300 mph.</Text>
          <Text>Os tornados podem se formar em qualquer lugar do mundo.

No entanto, os Estados Unidos são um grande ponto crítico, experimentando cerca de 1.000 tornados a cada ano.

Tornado Alley é uma região que inclui a área no estado oriental de Dakota do Sul, Nebraska, Kansas, Oklahoma, norte do Texas e leste do Colorado.

Ele vê a mais poderosa e destrutiva dessas tempestades. Nos Estados Unidos, eles matam cerca de 70 pessoas e ferem mais de 1.500 a cada ano.</Text>
        </TextContainer>
      </SectionContainer>

      {/* Terremotos*/}
      <SectionContainer id="terra">
        <TextContainer>
          <Title>Terremotos</Title>
          <TipoDeDesastre>Terremotos, também conhecidos como eventos sísmicos, ocorrem em todo o mundo todos os dias. A maioria deles é pequena demais para causar qualquer dano.</TipoDeDesastre>
          <Text>Para entender o que causa um evento sísmico, é importante saber o que são placas tectônicas e como elas funcionam.

As placas tectônicas cobrem a superfície da Terra. Eles se movem lentamente, mas ficam presos nas bordas devido ao atrito. E quando o estresse na borda supera o atrito, há um terremoto. Isso libera energia em ondas que viajam pela crosta terrestre e causam o tremor que sentimos.</Text>
          <Text>Chamamos o ponto subterrâneo, onde a força se constrói, o foco. À medida que a força da força varia, o mesmo acontece com a escala dos terremotos. E é por isso que alguns são muito mais prejudiciais do que outros. Um terremoto pode desencadear perigos ou desastres secundários, que às vezes causam muito mais danos. Isso inclui deslizamentos de terra, tsunamis e inundações.</Text>
        </TextContainer>
        <CarrosselDeImagens images={[img8]} />
      </SectionContainer>

       {/* Vulcões*/}
       <SectionContainer id="magma">
       <CarrosselDeImagens images={[img9]} />
        <TextContainer>
          <Title>Vulcões</Title>
          <TipoDeDesastre>No momento, existem centenas de vulcões borbulhando ativamente em todo o mundo. Estima-se que existam cerca de 1.500 vulcões potencialmente ativos em todo o mundo </TipoDeDesastre>
          <Text>Um vulcão é uma montanha que se abre para baixo para uma piscina de rocha derretida abaixo da superfície da terra. Essa rocha derretida é conhecida como magma.

Quando entra em erupção, grandes quantidades de gás muito quente, pedregulhos, cinzas e rocha derretida podem explodir. Isso é jogado no ar, muitas vezes caindo pela encosta da montanha.

Quando a rocha derretida desce a montanha, ela cria lava ou fluxos piroclásticos. Quaisquer edifícios ou estruturas ao redor da área de um vulcão quando ele entrar em erupção serão destruídos ou danificados.

Além de fluxos de lama e rocha líquida incrivelmente quentes, as casas são comumente destruídas por cinzas quentes caindo como chuva em tudo abaixo.</Text>
        </TextContainer>
      </SectionContainer>

    </div>
  );
}

export default DesastresExplicados;
