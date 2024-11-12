import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../ComponentsGerais/ScrollToTop";
import FotoOndeTrabalhamos from '../../../assets/img/fotoondetrabalhamos.jpg'
import FotoTomeAcao from '../../../assets/img/fototomeacao.jpg'
import FotoDesastresExplicados from '../../../assets/img/fotodesastresexplicados.jpg'


const Container = styled.div`
  background-color: #DFF6F0;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`

const GridContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
`

const GridComponent = styled.div`
    height: 500px;
    width: 600px;
`

const ImgContainer = styled.div`   
    height: 280px;
    border: 2px solid black;
`

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const TextsContainer = styled.div`
    height: 170px;
`

const Title = styled.h1`
    
`

const Texts = styled.p`
    font-size: 22px;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BtnSaibaMais = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
font-size: 30px;
font-weight: bold;
background-color: #15AC86;

border-radius: 2px;
transition: 0.35s ease-in-out;
border: none;

&:hover{
  background-color: #108265;
  cursor: pointer;
}

a{
  color: #002c10;
  text-decoration: none;
}
`

function GridSection() {
    return (
        <Container>
            <GridContainer>
                <GridComponent>
                    <ImgContainer>
                        <Img src={FotoOndeTrabalhamos} />
                    </ImgContainer>
                    <TextsContainer>
                        <Title>Onde Trabalhamos</Title>
                        <Texts>Receba as últimas atualizações sobre nosso trabalho e descubra onde estamos apoiando comunidades ao redor do mundo após desastres e conflitos.</Texts>
                    </TextsContainer>
                    <BtnContainer>
                        <BtnSaibaMais>
                            <Link onClick={ScrollToTop} to='/ondetrabalhamos'>VEJA MAIS</Link>
                        </BtnSaibaMais>
                    </BtnContainer>
                </GridComponent>
                <GridComponent>
                    <ImgContainer>
                        <Img src={FotoTomeAcao} />
                    </ImgContainer>
                    <TextsContainer>
                        <Title>Tome Ação</Title>
                        <Texts>Tome ação e nos ajude a entregar uma fundação de recupeção para pessoas sem abrigo depois de desastres.</Texts>
                    </TextsContainer>
                    <BtnContainer>
                        <BtnSaibaMais>
                            <Link onClick={ScrollToTop} to='/tome-acao'>VEJA MAIS</Link>
                        </BtnSaibaMais>
                    </BtnContainer>
                </GridComponent>
                <GridComponent>
                    <ImgContainer>
                        <Img src={FotoDesastresExplicados} />
                    </ImgContainer>
                    <TextsContainer>
                        <Title>Desastres explicados</Title>
                        <Texts>De terremotos e tsunamis, até conflitos e emergências complexas. Aqui está tudo o que você precisa saber para melhor compreeder esses acontecimentos.</Texts>
                    </TextsContainer>
                    <BtnContainer>
                        <BtnSaibaMais>
                            <Link onClick={ScrollToTop} to='/desastresexplicados'>VEJA MAIS</Link>
                        </BtnSaibaMais>
                    </BtnContainer>
                </GridComponent>
            </GridContainer>
        </Container>
    )
}
export default GridSection
