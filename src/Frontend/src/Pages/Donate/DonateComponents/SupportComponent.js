import React, { useState } from 'react';
import paypalImage from '../../../assets/img/paypal-image.jpg'; 
import phoneImage from '../../../assets/img/phone-image.jpg'; 
import jagaimo from '../../../assets/img/himitsu.png'; 

const SupportComponent = () => {
  const [showAlert, setShowAlert] = useState(false);

  // Função para redirecionar para a página do PayPal
  const handlePayPalClick = () => {
    window.location.href = 'https://www.paypal.com/gb/fundraiser/charity/15601'; 
  };

  const handleAlertClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 250); 
  };

  const styles = {
    supportContainer: {
      width: '100%',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    supportTextSection: {
      marginBottom: '40px',
    },
    supportTitle: {
      color: '#2e7d32',
      fontSize: '28px',
      marginBottom: '20px',
    },
    supportParagraphs: {
      color: '#333',
      fontSize: '16px',
      lineHeight: '1.5',
      maxWidth: '800px',
      margin: '0 auto',
    },
    otherDonationOptions: {
      marginTop: '40px',
    },
    otherDonationTitle: {
      color: '#2e7d32',
      fontSize: '24px',
      marginBottom: '20px',
    },
    donationOptions: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
    },
    donationOption: {
      textAlign: 'center',
      maxWidth: '200px',
    },
    donationImage: {
      width: '100%',
      height: 'auto',
      marginBottom: '15px',
    },
    donationOptionTitle: {
      fontSize: '20px',
      marginBottom: '10px',
    },
    donationOptionText: {
      fontSize: '14px',
      marginBottom: '15px',
    },
    donationButton: {
      backgroundColor: '#2e7d32',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      borderRadius: '5px',
    },
    Himitsu: {
      position: 'fixed',
      bottom: '200px',
      right: '20px',
      border: 'none',
      background:'none',
      opacity:'0',
      cursor: 'pointer',
    },
    boo: {
      position: 'fixed',
      bottom: '200px',
      right: '20px',
      width: '100px', 
      height: 'auto',
      transition: 'opacity 0.5s ease',
    },
  };

  return (
    <div style={styles.supportContainer}>
      <div style={styles.supportTextSection}>
        <h2 style={styles.supportTitle}>Porque dar suporte à ShelterBox?</h2>
        <div style={styles.supportParagraphs}>
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
        </div>
      </div>

      <div style={styles.otherDonationOptions}>
        <h2 style={styles.otherDonationTitle}>Outros meios de fazer uma doação</h2>
        <div style={styles.donationOptions}>
          <div style={styles.donationOption}>
            <img src={paypalImage} alt="Use PayPal para doar" style={styles.donationImage} />
            <h3 style={styles.donationOptionTitle}>PayPal</h3>
            <p style={styles.donationOptionText}>Doe diretamente da sua conta do PayPal de forma rápida e fácil.</p>
            <button style={styles.donationButton} onClick={handlePayPalClick}>Doe Agora</button>
          </div>

          <div style={styles.donationOption}>
            <img src={phoneImage} alt="Telefone para doação" style={styles.donationImage} />
            <h3 style={styles.donationOptionTitle}>Telefone</h3>
            <p style={styles.donationOptionText}>Entre em contato com nossa equipe de Atendimento ao Apoio pelo telefone 4002 8922 para fazer uma doação com cartão ou contribuir.</p>
            <button style={styles.donationButton}>Contate-nos</button>
          </div>
        </div>
      </div>
      <button style={styles.Himitsu} onClick={handleAlertClick}> !</button>
      {showAlert && <img src={jagaimo} alt="boo" style={{ ...styles.boo, opacity: showAlert ? 1 : 0 }} />}
    </div>
  );
};

export default SupportComponent;
