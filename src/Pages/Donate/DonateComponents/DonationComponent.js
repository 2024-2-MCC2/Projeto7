import React, { useState } from 'react';
import vinteImage from '../../../assets/img/20.jpg';
import cinquentaImage from '../../../assets/img/50.jpg';
import centoquarentaImage from '../../../assets/img/140.jpg';
import quatrocentosImage from '../../../assets/img/400.jpg';
import motivationalImage from '../../../assets/img/donatepart.jpg'; 
import styled from 'styled-components';

const DonationComponent = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [currentImage, setCurrentImage] = useState(vinteImage); 
  const [donationText, setDonationText] = useState('Escolha um valor para doar'); 

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');

    switch (amount) {
      case 20:
        setCurrentImage(vinteImage);
        setDonationText('Você pode fornecer uma lona para ajudar uma família a melhorar seu abrigo e protegê-los dos elementos.');
        break;
      case 50:
        setCurrentImage(cinquentaImage);
        setDonationText('Você poderia ajudar uma família a melhorar sua casa de tijolos de barro ou abrigo improvisado com um telhado de lona para protegê-los dos elementos.');
        break;
      case 140:
        setCurrentImage(centoquarentaImage);
        setDonationText('Você poderia fornecer um kit de ferramentas comunitário contendo ferramentas de construção que podem ser compartilhadas entre várias famílias.');
        break;
      case 400:
        setCurrentImage(quatrocentosImage);
        setDonationText('Você poderia fornecer uma tenda sob medida, multifuncional e grande o suficiente para uma família inteira.');
        break;
      default:
        setCurrentImage(vinteImage); 
        setDonationText('Você pode fornecer uma lona para ajudar uma família a melhorar seu abrigo e protegê-los dos elementos.');
    }
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setSelectedAmount(null);
    setCustomAmount(value);

    if (value >= 20 && value < 50) {
      setCurrentImage(vinteImage);
      setDonationText('Você pode fornecer uma lona para ajudar uma família a melhorar seu abrigo e protegê-los dos elementos.');
    } else if (value >= 50 && value < 140) {
      setCurrentImage(cinquentaImage);
      setDonationText('Você poderia ajudar uma família a melhorar sua casa de tijolos de barro ou abrigo improvisado com um telhado de lona para protegê-los dos elementos.');
    } else if (value >= 140 && value < 400) {
      setCurrentImage(centoquarentaImage);
      setDonationText('Você poderia fornecer um kit de ferramentas comunitário contendo ferramentas de construção que podem ser compartilhadas entre várias famílias.');
    } else if (value >= 400) {
      setCurrentImage(quatrocentosImage);
      setDonationText('Você poderia fornecer uma tenda sob medida, multifuncional e grande o suficiente para uma família inteira.');
    } else {
      setCurrentImage(vinteImage); 
      setDonationText('Você pode fornecer uma lona para ajudar uma família a melhorar seu abrigo e protegê-los dos elementos.');
    }
  };

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    if (amount && amount > 0) { 
      window.location.href = 'https://pay.shelterbox.org/p/donate-details/110338190915105192'; 
    } else {
      alert('Por favor, insira um valor válido para doar (positivo).');
    }
  };

  return (
    <PageContainer>
      <DonationContainer>
        <ImageSection>
          <img src={motivationalImage} alt="Motivação para doar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <MotivationalText>Doe agora para apoiar as pessoas afetadas por conflitos e desastres ao redor do mundo.</MotivationalText>
        </ImageSection>

        <DonationSection>
          <DonationButtons>
            {[20, 50, 140, 400].map((amount) => (
              <AmountButton
                key={amount}
                onClick={() => handleAmountClick(amount)}
                isSelected={selectedAmount === amount}
              >
                ${amount}
              </AmountButton>
            ))}
            <CustomAmountInput 
              type="number" 
              placeholder="Escolha um valor" 
              value={customAmount} 
              onChange={handleCustomAmountChange} 
              min="0" 
            />
          </DonationButtons>

          <ItemsInfo>
            <img src={currentImage} alt="Itens doados" style={{ width: '200px', height: '120px', objectFit: 'cover', marginBottom: '10px' }} />
            <p>{donationText}</p>
          </ItemsInfo>

          <DonateButton onClick={handleDonate}>Doar &gt;</DonateButton>
          <HelpText>Precisa de ajuda com a doação? Ligue  +44 300 0300 500</HelpText>
        </DonationSection>
      </DonationContainer>
    </PageContainer>
  );
};

// Styled Components

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #00cc99;
`;

const DonationContainer = styled.div`
  display: flex;
  background-color: #e5f8f3;
  padding: 0;
  border: 1px solid #ccc;
  width: 900px;
  height: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const MotivationalText = styled.p`
  position: absolute;
  bottom: 130px;
  transform: translateX(-0%);
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

const DonationSection = styled.div`
  flex: 2;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const DonationButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const AmountButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: white;
  ${({ isSelected }) => isSelected && `
    background-color: #00cc99;
    color: white;
  `}
`;

const CustomAmountInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
`;

const ItemsInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const DonateButton = styled.button`
  background-color: #00cc99;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 500px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #009977;
  }
`;

const HelpText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export default DonationComponent;
