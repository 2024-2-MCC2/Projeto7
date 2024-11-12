import React from "react";
import styled from "styled-components";
import FotoWhyShelter from '../../../assets/img/whyshelter.jpg'

const Container = styled.div`
    height: 650px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const LeftSection = styled.div`
    width: 40%;
`

const Title = styled.h1`
    
`

const Text = styled.p`
    font-size: 22px;
`
const BoldText = styled.p`
    font-weight: bold;
    font-size: 22px;
`

const ImgContainer = styled.div`
    border: 2px solid black;
    height: 550px;
    width: 800px;
`

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

function WhyShelter (){
    return(
    <Container>
        <LeftSection>
            <Title>Por que abrigos?</Title>
            <BoldText>A recuperação começa com abrigo. Ter um lugar seco e aquecido para dormir, preparar refeições e estar com sua família é essencial para iniciar o longo processo de reconstruir sua vida.</BoldText>
            <Text>Abrigos de emergência oferecem privacidade e ajudam a preservar sua dignidade. Eles oferecem proteção contra as intempéries, animais e doenças. Ajudam a manter as comunidades unidas. Podem trazer de volta uma sensação de normalidade, permitindo que as crianças voltem para a escola.</Text>
            <Text>Mais importante ainda, ele capacita as pessoas a iniciarem o processo de recomeçar suas vidas.</Text>
        </LeftSection>
        <ImgContainer>
            <Img src={FotoWhyShelter} alt='Familia dentro de um abrigo ShelterBox'/>
        </ImgContainer>
    </Container>
    )
}
export default WhyShelter