import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import paypalImage from '../../../assets/img/paypal-image.jpg'; 
import phoneImage from '../../../assets/img/phone-image.jpg'; 
import jagaimo from '../../../assets/img/himitsu.png'; 
import styled from 'styled-components';

const SupportComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); 

  const handlePayPalClick = () => {
    window.location.href = 'https://www.paypal.com/gb/fundraiser/charity/15601'; 
  };

  const handleAlertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 250); 
  };

  const handleContactClick = () => {
    navigate('/contato'); 
  };

  return (
    <SupportContainer>
      <SupportTextSection>
        <SupportTitle>Porque dar suporte à ShelterBox?</SupportTitle>
        <SupportParagraphs>
          <p>
            Com mais de 20 anos de experiência, somos especialistas em abrigos de emergência após desastres.
            A ShelterBox frequentemente trabalha em locais onde outros não atuam, garantindo que as famílias recentemente afetadas que
            precisam de abrigo deem o próximo passo para retomar suas vidas.
          </p>
          <p>
            De Camarões à Síria, passando pelas Filipinas e Caribe, já fornecemos abrigo para mais de 2,5 milhões de pessoas. Nestes tempos incertos, o seu apoio é mais valioso do que nunca.
          </p>
          <p>
            Graças ao seu incrível apoio e à ajuda de nossos parceiros em todo o mundo, a ShelterBox forneceu abrigo para mais de 400.000 pessoas em 2022.
          </p>
          <p>
            Não vamos parar até vermos um mundo onde nenhuma família fique sem abrigo após um desastre. Você nos ajudará?
          </p>
        </SupportParagraphs>
      </SupportTextSection>

      <OtherDonationOptions>
        <OtherDonationTitle>Outros meios de fazer uma doação</OtherDonationTitle>
        <DonationOptions>
          <DonationOption>
            <DonationImage src={paypalImage} alt="Use PayPal para doar" />
            <DonationOptionTitle>PayPal</DonationOptionTitle>
            <DonationOptionText>Doe diretamente da sua conta do PayPal de forma rápida e fácil.</DonationOptionText>
            <DonationButton onClick={handlePayPalClick}>Doe Agora</DonationButton>
          </DonationOption>

          <DonationOption>
            <DonationImage src={phoneImage} alt="Telefone para doação" />
            <DonationOptionTitle>Telefone</DonationOptionTitle>
            <DonationOptionText>Entre em contato com nossa equipe de Atendimento ao Apoio pelo telefone 4002 8922 para fazer uma doação com cartão ou contribuir.</DonationOptionText>
            <DonationButton onClick={handleContactClick}>Contate-nos</DonationButton>
          </DonationOption>
        </DonationOptions>
      </OtherDonationOptions>

      <HimitsuButton onClick={handleAlertClick}> !</HimitsuButton>
      {showAlert && <BooImage src={jagaimo} alt="boo" style={{ opacity: showAlert ? 1 : 0 }} />}
    </SupportContainer>
  );
};

// Styled Components

const SupportContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const SupportTextSection = styled.div`
  margin-bottom: 40px;
`;

const SupportTitle = styled.h2`
  color: #2e7d32;
  font-size: 28px;
  margin-bottom: 20px;
`;

const SupportParagraphs = styled.div`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
`;

const OtherDonationOptions = styled.div`
  margin-top: 40px;
`;

const OtherDonationTitle = styled.h2`
  color: #2e7d32;
  font-size: 24px;
  margin-bottom: 20px;
`;

const DonationOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const DonationOption = styled.div`
  text-align: center;
  max-width: 200px;
`;

const DonationImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const DonationOptionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DonationOptionText = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const DonationButton = styled.button`
  background-color: #2e7d32;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background-color 0.3s ease;  /* Adicionando transição suave */
  
  &:hover {
    background-color: #1b5e20;  /* Alteração da cor de fundo no hover */
  }
`;

const HimitsuButton = styled.button`
  position: fixed;
  bottom: 200px;
  right: 20px;
  border: none;
  background: none;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease;
`;

const BooImage = styled.img`
  position: fixed;
  bottom: 200px;
  right: 20px;
  width: 100px;
  height: auto;
  transition: opacity 0.5s ease;
`;

export default SupportComponent;

