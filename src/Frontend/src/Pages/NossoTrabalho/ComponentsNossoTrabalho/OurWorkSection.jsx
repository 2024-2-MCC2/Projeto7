import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fotonossotrabalho from '../../../assets/img/Fotonossotrabalho.jpg'


const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #DFF6F0;
  height: 400px;
`;

const LeftSection = styled.div`
  max-width: 30%;
  height: 100%;
  /* border: 2px solid black; */
`

const Title = styled.h2`
  color: #000;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  margin-top: 20%;
`;

const Text = styled.p`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  /* flex: 1; */
  width: 1000px;
  height: 500px;
  border: 2px solid black;
  margin-right: 100px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function OurWorkSection() {
    return (
        <div>
            <Container>
                <LeftSection>
                    <Title>Nosso Trabalho</Title>
                    <Text>Saiba mais sobre a ShelterBox e como trabalhamos com comunidades afetadas por desastres para ajudar as pessoas a reconstruírem suas vidas.</Text>
                </LeftSection>
                <ImgContainer>
                    <Img src={fotonossotrabalho} alt="foto nossotrabalho page" />
                </ImgContainer>
            </Container>
        </div>
    )
}
export default OurWorkSection