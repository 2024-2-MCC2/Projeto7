import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const LeftSection = styled.div`
    
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
    
`

const Img = styled.img`
    
`

function WhyShelter (){
    <Container>
        <LeftSection>
            <Title>Por que abrigos?</Title>
            <BoldText>A recuperação começa com abrigo. Ter um lugar seco e aquecido para dormir, preparar refeições e estar com sua família é essencial para iniciar o longo processo de reconstruir sua vida.</BoldText>
            <Text></Text>
            <Text></Text>
        </LeftSection>
        <ImgContainer>
            <Img/>
        </ImgContainer>
    </Container>
}
export default WhyShelter