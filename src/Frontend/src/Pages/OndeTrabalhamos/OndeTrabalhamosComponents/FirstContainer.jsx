import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import img from '../../../assets/img/ondeTrabalhamos.jpg'

const GeneralContainer = styled.div`
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 2px solid black; */
    background-color: #d1ffce;
`

const Image = styled.img`
    border-radius: 10px;
`

const TextContainer = styled.div`
    max-width: 50%;
    border: 2px solid black;
    text-align: center;
    background-color: #90ce8b;
`

const MainTitle = styled.h3`
margin: 50px;
font-size: 40px;
`
const MainText = styled.p`
    margin: 50px;
    font-size: 25px;
`



function FirstContainer(){
    return(
<GeneralContainer>
    <div>
        <Image src={img}/>
    </div>
    <TextContainer>
        
        <MainTitle>Onde Trabalhamos</MainTitle>
        <MainText>Nosso trabalho visa ajudar as comunidades ao redor do globo que sofreram perdas com desastres naturais. Descubra abaixo onde estamos atuando!</MainText>
    </TextContainer>
</GeneralContainer>
    )
}
export default FirstContainer