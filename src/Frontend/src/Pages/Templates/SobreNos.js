import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/shelter.jpg";
import Image2 from "../../assets/img/impactoglobal.jpeg";
// import Image3 from "../../assets/img/ajuda.jpg";
// import Image4 from "../../assets/img/ajuda2.png";
import {Link} from 'react-router-dom';
import Carousel from "./CarrousselComponents";


const Background1 = styled.div`
padding: 10px;
 background-color: #bdfcd2;
 display: flex;
 justify-content: space-around;
 align-items: center;
 
`
const ImageDisplay = styled.image `
     display: flex;
     height: 450px;
     margin-left: 10%;
    max-width: 1%;
    margin-bottom: 0%;
    margin-top: 1%;
`

const Textos = styled.div`
     display: block;
     text-align: center;
     margin-left: 30%;
    width: 50%;
`

const T2 = styled.text`
justify-content: center;
   display: flex;
   margin-top: 4%;
   margin-left: 4%;
`

const T3 = styled.text`
   display: flex;
   margin-top: 4%;
   margin-left: 4%;

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
   <div style={{ backgroundColor: 'lightblue', height: '400px', width: '700px', alignItems: 'center', justifyContent: 'center' }}>   <img src={Image2} alt="Image"/></div>,
   // <div style={{ backgroundColor: 'lightcoral', height: '400px',width: '700px', alignItems: 'center', justifyContent: 'center' }}>  <img src={Image3} alt="Image"/></div>,
   // <div style={{ backgroundColor: 'lightgreen', height: '400px',width: '700px',  alignItems: 'center', justifyContent: 'center' }}><img src={Image4} alt="Image"/></div> 
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
border-radius: 2px;
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #108265;
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
  margin-left: 25%; //so pra alinhar as caixas com o titulo
  max-width: 50%;
`

const Box1 = styled.div`
 text-align: center;
 justify-content: center;
  background-color: #bdfcd2;
  height: 250px;
  width: 200px;
`


function SobreNos (){
return (
    <div>
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
              <h1> Titulo!!! </h1>
              <p> texto </p>
           </Box1>

           <Box1>
              <h1> Titulo!!! </h1>
              <p> texto </p>
           </Box1>

           <Box1>
              <h1> Titulo!!! </h1>
              <p> texto </p>
           </Box1>
           
        </Background3>

        </div>
)
}
export default SobreNos;
