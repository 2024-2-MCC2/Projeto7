import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/shelter.jpg";
import Image2 from "../../assets/img/nuhuh.jpg"
import {Link} from 'react-router-dom'

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

const Background2 = styled.div`
  display: flex;
  background-color: #dafff7;
  border: 2px solid black;
`

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
 `

const ImageDisplay2 = styled.image`
 display: flex;
 justify-content: right;
 margin-left: 8%;
  max-width: 30%;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 500px;
`

const Textos2 = styled.div`
    display: block;
     justify-content: center;
    margin-left: 8%;
    border: 2px solid black;
`

const T4 = styled.text `
   color: #1D371B;
   margin-top: 4%;
   margin-left: 4%;
   justify-content: center;
`

const T5 = styled.text `
display: flex;
   margin-left: 0%;
   margin-right: 1%;
   margin-top: 10%;
   justify-content: center;
`

const T6 = styled.text`
display: flex;
   margin-left: 0%;
   margin-right: 1%;
   margin-top: 10%;
   justify-content: center;
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

const Background3 = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: 30%;
  max-width: 50%;
`

const Box1 = styled.div`
 text-align: center;
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
        <p>  O ShelterBox é uma instituição de caridade que visa ajudar aqueles que sofreram perdas causadas por desastres naturais. A instituição tem como o principal obejtivo ajudar a reconstruir a vida dessas vítimas apartir de doações.
          Eles acreditam que toda familia merece um lugar para chamar de casa após um desastre e após escutar e aprender sobre o ocorrido, a instituição pega as informações e ajuda de acordo com oque as familias nescessitam. </p>
      </T3>
      </Textos>

        </Background1>

        <Background2>
<ImageDisplay2>
     <img src={Image2} alt="Em Construção"/>
</ImageDisplay2>

<Textos2>
<T4>
   <h1> Seu trabalho ao redor do mundo! </h1>
</T4>

<T5>
   <p> Texto explicativo </p>
   {/* A ideia depois é colocar um slide de componentes sobre o nosso trabalho, entao de um lado a foto e do outro o texto e os dois podendo fazer slide, tipo um carousel so que com texto junto */}
</T5>
<T6>
   <p> texto explicativo 2</p>
</T6>
</Textos2>

<ButtonBox>
<Button1> 
<Link to = "/ondetrabalhamos"> Saiba Mais! </Link>    
 </Button1>
</ButtonBox>

      </Background2>

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
