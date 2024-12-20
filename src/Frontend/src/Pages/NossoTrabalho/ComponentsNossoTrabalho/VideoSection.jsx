import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 1200px;
    padding: 50px;
    background-color: white;
`;

const VideoContainer = styled.div`
    max-width: 100%;
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
`;

const VideoPlayer = styled.iframe`
    width: 1155px;
    height: 650px;
    border: none;
`;

const TextsContainer = styled.div`
    border-bottom: 4px solid #15AC86;
    border-left: 4px solid #15AC86;
    border-top: 2px solid black;
    border-right: 2px solid black;
    margin: 70px 0px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    gap: 60px;
`;

const Texts = styled.p`
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
max-width: 50%;
line-height: 35px;
`;

function VideoSection() {
    return (
        <Container>
            <VideoContainer>
                <VideoPlayer
                    src="https://www.youtube.com/embed/Ukpl_yM1AKA"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoContainer>
            <TextsContainer>
                <Texts><strong>Toda família merece um lugar para chamar de lar após um desastre.</strong> <br />
                    <br />
                    Trabalhamos com comunidades afetadas por desastres para fornecer abrigo de emergência, itens essenciais e treinamento necessários para apoiar as famílias no longo processo de reconstrução de suas vidas. <br/>
                    <br/>
                    Cada desastre é diferente, então adotamos uma abordagem flexível. Escutamos e aprendemos com as comunidades com as quais trabalhamos para garantir que ofereçamos o suporte adequado.<br/>
                    <br/>
                    <strong>Frequentemente vamos além, atendendo comunidades de difícil acesso que são negligenciadas por outros.</strong></Texts>
                <Texts><strong>Antes que um desastre aconteça, garantimos que estamos prontos para ajudar. Armazenamos ajuda em locais estratégicos ao redor do mundo para que possamos entregá-la às famílias que precisam o mais rápido possível.</strong><br/>
                <br/>
                    Trabalhamos com parceiros locais confiáveis e contamos com uma rede de voluntários incríveis que estão prontos para ajudar a qualquer momento.<br/>
                    <br/>
                    Nossas equipes podem viajar a pé, de barco, helicóptero ou tuk-tuk para chegar às famílias que precisam do seu apoio – fazemos o que for necessário para alcançar as pessoas que precisam de nós.<br/>
                    <br/>
                    Saiba mais sobre como tudo isso acontece.</Texts>
            </TextsContainer>
        </Container>
    );
}

export default VideoSection;
