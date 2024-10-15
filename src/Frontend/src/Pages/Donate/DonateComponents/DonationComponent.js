import React, { useState } from 'react';
import vinteImage from '../../../assets/img/20.jpg';
import cinquentaImage from '../../../assets/img/50.jpg';
import centoquarentaImage from '../../../assets/img/140.jpg';
import quatrocentosImage from '../../../assets/img/400.jpg';
import motivationalImage from '../../../assets/img/donatepart.jpg'; 

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

  const styles = {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
      backgroundColor: '#00cc99',
    },
    donationContainer: {
      display: 'flex',
      backgroundColor: '#e5f8f3',
      padding: '0',
      border: '1px solid #ccc',
      width: '800px',
      height: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    imageSection: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
    },
    motivationalText: {
      position: 'absolute',
      bottom: '70px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '20px',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '5px',
    },
    motivationalImage: {
      position: 'absolute',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    donationSection: {
      flex: 2,
      backgroundColor: 'white',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    donationButtons: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      backgroundColor: 'white',
    },
    selected: {
      backgroundColor: '#00cc99',
      color: 'white',
    },
    customInput: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '150px',
    },
    itemsInfo: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    itemsImage: {
      width: '200px',
      height: '120px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    itemsText: {
      fontSize: '14px',
      color: '#333',
    },
    donateButton: {
      backgroundColor: '#00cc99',
      color: 'white',
      padding: '15px 40px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      width: '500px',
    },
    donateButtonHover: {
      backgroundColor: '#009977',
    },
    helpText: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#666',
    },
  };

  return (
    <div style={styles.pageContainer}> 
      <div style={styles.donationContainer}>
        <div style={styles.imageSection}>
          <img src={motivationalImage} alt="Motivação para doar" style={styles.motivationalImage} />
          <p style={styles.motivationalText}>Doe agora para apoiar as pessoas afetadas por conflitos e desastres ao redor do mundo.</p>
        </div>

        <div style={styles.donationSection}>
          <div style={styles.donationButtons}>
            {[20, 50, 140, 400].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                style={{ 
                  ...styles.button,
                  ...(selectedAmount === amount ? styles.selected : {}),
                }}
              >
                ${amount}
              </button>
            ))}
            <input 
              type="number" 
              placeholder="Escolha um valor" 
              value={customAmount} 
              onChange={handleCustomAmountChange} 
              style={styles.customInput}
              min="0" 
            />
          </div>

          <div style={styles.itemsInfo}>
            <img src={currentImage} alt="Itens doados" style={styles.itemsImage} />
            <p style={styles.itemsText}>{donationText}</p> 
          </div>

          <button style={styles.donateButton} onClick={handleDonate}>Doar &gt;</button>
          <p style={styles.helpText}>Precisa de ajuda com a doação? Ligue  +44 300 0300 500</p>
        </div>
      </div>
    </div>
  );
};

export default DonationComponent;
