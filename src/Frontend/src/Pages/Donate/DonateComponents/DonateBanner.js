import React from 'react';
import DonateBannerImagem from '../../../assets/img/Donate-banner.jpg'; 

const Donate = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ccffcc',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '1500px',
      margin: '20px auto',
    },
    title: {
      fontSize: '2em',
      color: '#004c3f',
      margin: 0,
    },
    image: {
      width: '300px',
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#ddd',
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div className="donate-text">
        <h2 style={styles.title}>Doe Agora</h2>
      </div>
      <div className="donate-image">
        <img src={DonateBannerImagem} alt="Imagem representativa de doação" style={styles.image} />
      </div>
    </div>
  );
}

export default Donate;
