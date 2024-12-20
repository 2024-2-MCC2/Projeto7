import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/shelter.jpg";
//import Image2 from "../../assets/img/impactoglobal.jpeg";
import {Link} from 'react-router-dom';
import Carousel from "../Templates/CarrousselComponents";

import CarrosselImage1 from "../../assets/img/fotocaribe1.jpg";
import CarrosselImage2 from "../../assets/img/fotosomalia1.png";
import CarrosselImage3 from "../../assets/img/fotopaquistao3.png";

const Background1 = styled.div`
 background-color: #bdfcd2;
 display: flex;
 justify-content: space-around;
 align-items: center;
 
`

const ButtonBoxInicial = styled.div`
position: relative;
  margin-top: 440px;
  margin-right: 70px;
  align-items: flex-end;
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 55px;
font-size: 23px;
font-weight: bold;
background-color: #15AC86;
border-radius: 20px;
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #108265;
  border-radius: 30px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
}
`


const ImageDisplay = styled.image `
     display: flex;
     height: 450px;
     margin-left: 3%;
    max-width: 1%;
    margin-bottom: 0%;
    margin-top: 1%;
`

const Textos = styled.div`
     display: block;
     text-align: center;
     margin-left: 35%;
    width: 50%;
    
`

const T2 = styled.text`
justify-content: center;
   display: flex;
   font-size: 22px;
   font-family:Arial, Helvetica, sans-serif;
`

const T3 = styled.text`
   display: flex;
   margin-top: 4%;
   margin-left: 4%;
   font-size: 22px;
   font-family:Arial, Helvetica, sans-serif;

`

const CarouselBox = styled.div`
   display: flex;
   justify-content: right;
   margin-top:20px;
   margin-left:410px;
   margin-right:70px;
   width: 700px;
   height: 400px;
`

const items = [
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <img src={CarrosselImage1} alt="Imagem 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <img src={CarrosselImage2} alt="Imagem 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <img src={CarrosselImage3} alt="Imagem 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
];


const Background2 = styled.div`
  display: flex; 
  background-color: #dafff7;
`

const Textos2 = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
  margin-left: 1px;
  max-width: 50%;
`

const T4 = styled.text `
   color: #1D371B;
   margin-left: 20%;
   text-align: center;
   justify-content: center;
`

const T5 = styled.text `
   display: block;
   align-items: center;
   font-size: 20px;
   justify-content: center;
`

const T6 = styled.text`
   display: block;
   align-items: center;
   justify-content: center;
`
const ButtonBox = styled.div`
  margin-top: 300px;
  align-items: flex-end;
 `

const Button1 = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 55px;
font-size: 23px;
font-weight: bold;
background-color: #15AC86;
border-radius: 20px; //deixar redondinho
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #108265;
  border-radius: 30px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
}
`

const Titulo = styled.text `
 display: flex;
 justify-content: center;
 margin-bottom: 2%; //so pra dar um espacinho entre as caixas e o título
`

const Background3 = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: 1%; //so pra alinhar as caixas com o titulo
`

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #bdfcd2;
  border-radius: 10px;
  height: 600px;
  width: 200px;  
  transition: 
    background-color 0.6s ease-in-out, 
    transform 0.6s ease-in-out, 
    height 0.6s ease-in-out, 
    width 0.6s ease-in-out, 
    border-radius 0.6s ease-in-out,
    box-shadow 0.6s ease-in-out;
  
  &:hover {
    height: 650px;
    width: 250px;
    border-radius: 30px;
    background-color: #6df89b;
    transform: scale(1.1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra para dar mais profundidade */
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Textos3 = styled.div`

`

const Background4 = styled.div`
margin-top: 40px;
padding: 10px;
color: #1d371b;
height: 400px;
background-color: #dafff7;
  align-items: flex-end;
`

const DonateTextBox = styled.div`
height: 95px;
display: flex;
justify-content: center;
`

const DonateText = styled.text` 
display: flex;
justify-content: center;
font-size: 22px;
`

 const DonateButton = styled.button`
 display: flex;
justify-content: center;
align-items: center;
max-width: 50%;
margin: 10px;
width: 300px;
height: 170px;
font-size: 50px;
font-weight: bold;
background-color: #ff0000;
border-radius: 20px; //deixar redondinho
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #cc0000;
  border-radius: 30px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
}
 `

 const DonateBox = styled.div` 
 width: 100%;
 max-height: 50%;
 display: flex;
 margin: 10px;
  justify-content: center;
 `

const Background5 = styled.div` 
margin-top: 40px;
color: #1d371b;
height: 450px;
background-color: #bdfcd2;
padding: 10px;
`
const Titulo5 = styled.text`
   display: flex;
   margin-top: 20px;
   font-weight: bold;
     text-align: center;
     justify-content: center;
     height: 92px;
`

const Descricao = styled.text`
 display: flex;
   font-weight: bold;
     justify-content: center;
     text-align: center;
     font-size: 22px;
`
const ButtonConheca = styled.button` 
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 250px;
height: 100px;
font-size: 23px;
font-weight: bold;
background-color: #15AC86;
border-radius: 20px; //deixar redondinho
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #108265;
  border-radius: 30px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
}
`

const BoxButtonConheca = styled.div`
 display: flex;
 justify-content: center;
 text-align: center;
`

function SobreNos (){
return (
    <div className="main-content">
        <Background1>

        <ImageDisplay>
        <img src={Image} alt="Image"/>
        </ImageDisplay>

<Textos>
     <T2>
        <h1> Quem é ShelterBox? </h1>
     </T2>

      <T3>
        <p>  O ShelterBox é uma instituição de caridade que visa ajudar aqueles que sofreram perdas causadas por desastres naturais. A instituição tem como o principal obejtivo ajudar a reconstruir a vida dessas vítimas apartir de doações.</p> </T3>
         <T3> <p> Eles acreditam que toda familia merece um lugar para chamar de casa após um desastre e após escutar e aprender sobre o ocorrido, a instituição pega as informações e ajuda de acordo com oque as familias nescessitam. </p> </T3>
      </Textos>

      <ButtonBoxInicial>
 <Button> <Link to = "/NossoTrabalho"> Saiba Mais! </Link> </Button>
 </ButtonBoxInicial>

        </Background1>

        <Background2>

<Textos2>
<T4>
   <h1> Seu trabalho ao redor do mundo! </h1>

<T5>
   <p> O shelterbox tem como o principal objetivo ajudar famílias ao redor de todo o globo, respondendo sempre aonde masi nescessita. Eles fazem tudo que poderem para operar e ajudar com abrigo onde estiver prescisando. </p>
<T6>
   <p> O critério de decisão se da apartir de diferentes aspectos, como o número de pessoas que prescisam, se a resposrta será aceita, habilidade de operar entre outros, já que eles são uma instituição com recursos limitados.</p>
</T6>
</T5>
</T4>
</Textos2>

<ButtonBox>
<Button1> 
<Link to = "/ondetrabalhamos"> Saiba Mais! </Link>    
 </Button1>
</ButtonBox>

<CarouselBox>
<Carousel items={items} />
</CarouselBox>
 
      </Background2>

<Titulo> <h1> Tipos de ajuda! </h1></Titulo>

        <Background3>
         
           <Box1>
              <h1> Shelter Kits </h1>
              <Textos3>
              <p> Os ShelterKits, contém uma seleção de materiais nescessários para poder fazer um abrigo de emergência. A instituição personaliza esses kits de acordo com a localização e nescessidade de cada comunidade. </p>
              <p> Esses incluem kits de ferramentas, cordas, fixações e lonas resistentes, que podem ser usados ​​para fazer abrigos de emergência, reparar edifícios danificados e criar as fundações para novas casas além de às vezes, incluirem ferro corrugado para ajudar a fazer coberturas resilientes, ou até mesmo divisórias e colchões para tornar os armazéns habitáveis.</p>
               </Textos3>

           
           </Box1>

           <Box1>
              <h1> Tendas </h1>
              <Textos3>
              <p> Quando as famílias não conseguem começar a reconstruir suas casas de imediato, o ShelterBox forneçe um alto número de tendas fortes e resistentes que conseguem suportar extremas condições de clima e temperatura </p>
              <p>
                As tendas podem variar conforme as condições, logo eles não fornece apenas um tipo. Desde tendas acolchoadas que podem acomodar um fogão com segurança até tendas de tamanho médio que cabem em espaços pequenos e que podem durar anos se necessário
              </p>
               </Textos3>
         
           </Box1>

           <Box1>
              <h1> Luz </h1>
              <Textos3>
              <p> O ShelterBox forneçe luz solar para as comunidades que podem durar até 24 horas com apenas uma taxa e pode carregar até mesmo em dias nublados. Além de ajudar a afastar o escuro quando a energia está baixa, eles também podem carregar telefones celulares.</p>
              <p> Eles são leves, resistentes à água e fáceis de transportar em qualquer situação. Ajudando a iluminar o caminho para o trabalho, a educação e as refeições.</p>
               </Textos3>
              
           </Box1>
           
           <Box1>
              <h1> Cobertas </h1>
              <Textos3>
              <p> Cobertores, colchões e lençóis fornecem calor e conforto vitais. Eles ajudam as pessoas a terem uma noite de sono que precisam, com conforto. </p>
              <p>Esses itens simples podem ser usados de várias maneiras, desde roupas de cama até divisores de sala, e ajudar a transformar um abrigo em uma casa. </p>
               </Textos3>
            
           </Box1>

           <Box1>
              <h1> Filtros de água </h1>
              <Textos3>
              <p> Quando os desastres devastam a paisagem e forçam as pessoas longe de casa, pode ser difícil acessar água limpa e segura. </p>
              <p> Ao fornecer recipientes de água e filtros de água, a água potável se torna uma coisa a menos para se preocupar.</p>
               </Textos3>
               
           </Box1>

           <Box1>
              <h1> Sets de cozinha </h1>
              <Textos3>
              <p> Quando as pessoas perdem suas casas, muitas vezes ficam sem itens que são fundamentais para a sobrevivência. </p>
              <p>Itens de cozinha como panelas e frigideiras, pratos, utensílios e talheres ajudam as pessoas a preparar alimentos. </p>
               </Textos3>
           
           </Box1>

           <Box1>
              <h1> Redes de mosquito</h1>
              <Textos3>
              <p> Em lugares onde as doenças transmitidas por insetos são comuns, as redes mosquiteiras são uma maneira eficaz de manter as pessoas seguras. </p>
              <p> Estas redes são revestidas com inseticida. Eles oferecem uma camada extra de proteção matando insetos na rede. </p>
               </Textos3>
              
           </Box1>

        </Background3>

        <Background4>
         <DonateTextBox> 
          <h1> Gostaria fazer a diferença e mudar a vida de alguém?</h1>
            </DonateTextBox>
            <DonateText> <p> A sua doação pode ajudar a fazer a diferença na vida de diversas pessoas. Ajude o ShelterBox a trazer para aqueles que nescessitam de assistencia, a reconstruir suas vidas!</p></DonateText>
<DonateBox>
        <DonateButton> 
<Link to = "/donate"> Doe Já! </Link>    
 </DonateButton>
 </DonateBox>
      </Background4>

      <Background5>
         <Titulo5>
            <h1> Sobre o Time de direção do site!</h1>
         </Titulo5> 
       <Descricao> <p> conheça um pouco sobre os criadores do site!</p></Descricao> 
       <BoxButtonConheca>
<ButtonConheca> <Link to ="/timedosite"> Conheça Noso Time!</Link> </ButtonConheca>
</BoxButtonConheca>
      </Background5>
        </div>
)
}
export default SobreNos;
