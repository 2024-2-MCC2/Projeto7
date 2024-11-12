import React from "react";
import styled from "styled-components";

const BackgroundGeral = styled.div`
  display: flex;
  background-color:#bdfcd2;
`

const ImageBoxGeral = styled.div`
 justify-content: center;
 margin-left: 500px;
 padding: 9px;
`

const ImageGeral = styled.div`
display: flex;
background-color: lightblue;
height: 400px;
width: 900px;
justify-content: center;
`

const TextodeDescricao = styled.text`
display: flex;
justify-content: baseline;

 border: 2px solid black;
`

function Time (){
return(
    <div>
<BackgroundGeral>
    <ImageBoxGeral>
 <ImageGeral>
    <p> aqui vai a imagem do grupo</p>
 </ImageGeral>
 </ImageBoxGeral>

<TextodeDescricao>
 <h1> Sobre o nosso time</h1>
</TextodeDescricao>
 
</BackgroundGeral>
    </div>
)
}
export default Time;