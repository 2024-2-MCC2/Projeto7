import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/shelter.jpg";
import Image2 from "../../assets/img/nuhuh.jpg"

const Background1 = styled.div`
padding: 10px;
 background-color: #bdfcd2;
`

const ImageDisplay = styled.image `
     display: flex;
     justify-content: left;
     height: 450px;
     transform: translateY(4%);
     transform: translateX(7%);
`

const Textos = styled.div`
     display: block;
     text-align: center;
     transform: translateY(-250%);
`

const T2 = styled.text`
   display: flex;
   justify-content: right;
   text-align: center;
transform: translateX(-30%);

`

const T3 = styled.text`
   display: flex; 
    justify-content: center;
    text-align: center;


`

const Background2 = styled.div`
  display: flex;
  background-color: #dafff7;
`

const ImageDisplay2 = styled.image`
 display: flex;
 justify-content: right;
transform: translateX(299%); 
 transform: translateY(10%); 
height: 500px;
`

const T4 = styled.text `
  display: flex;
   text-align: center;
   color: #1D371B;
`

const T5 = styled.text `
   display: flex;
   text-align: center;
   transform: translateY(80%);
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
        <p>  Texto explicativo  </p>
      </T3>
      </Textos>

        </Background1>

        <Background2>
<ImageDisplay2>
     <img src={Image2} alt="Em Construção"/>
</ImageDisplay2>

<T4>
   <h1> Seu trabalho ao redor do mundo! </h1>
</T4>

<T5>
   <p> Texto explicativo </p>
   {/* A ideia depois é colocar um slide de componentes sobre o nosso trabalho, entao de um lado a foto e do outro o texto e os dois podendo fazer slide, tipo um carousel so que com texto junto */}
</T5>

        </Background2>

        </div>
)

}
export default SobreNos;