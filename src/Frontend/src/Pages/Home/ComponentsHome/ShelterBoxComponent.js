import React from 'react';
import styled from 'styled-components';


const ShelterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0f7f4;
  padding: 50px;
 
`;

const TextSection = styled.div`
  max-width: 50%;

  h3 {
    font-size: 36px;
    color: #333;
  }

  p {
    font-size: 22px;
    color: #333;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: 10px;
  }
`;

const VideoSection = styled.div`
  max-width: 70%;
`;

const VideoPlaceholder = styled.div`
  width: 800px;
  height: 450px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

// Componente principal
function ShelterBoxComponent() {
  return (
    <ShelterBox>
      <TextSection>
        <h3>Sobre o ShelterBox</h3>
        <p>A ShelterBox existe para garantir que ninguém fique sem abrigo após o desastre. Muitas vezes trabalhamos em lugares que outros não trabalham, certificando-nos de alcançar as famílias que precisam de apoio para dar o próximo passo na retomada de seus meios de subsistência.

Ao fornecer abrigo de emergência e ferramentas para famílias roubadas de suas casas por desastres, estamos transformando o desespero em esperança.

De Camarões à Síria, até as Filipinas e o Caribe, a ShelterBox forneceu abrigo a mais de 2,5 milhões de pessoas até agora.

Não vamos parar até vermos um mundo onde nenhuma família fica sem abrigo após o desastre.</p>
      </TextSection>
      <VideoSection>
        <VideoPlaceholder>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/Ukpl_yM1AKA" 
            title="Vídeo sobre ShelterBox"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoPlaceholder>
      </VideoSection>
    </ShelterBox>
  );
}

export default ShelterBoxComponent;
