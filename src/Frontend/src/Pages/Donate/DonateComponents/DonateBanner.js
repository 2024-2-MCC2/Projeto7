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
      fontSize: '4em',
      color: '#004c3f',
      margin: 0,
      left:0,
    },
    SubTitle: {
fontSize:'0,2em',
color:'#004c3f',
    },
    image: {
      width: '800px',
      height: '400px',
      objectFit: 'cover',
      backgroundColor: '#ddd',
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div className="donate-text">
        <h2 style={styles.title}>Doe Agora</h2>
        <h2 style={styles.SubTitle}>Reconstrua casas e transforme vidas</h2>
      </div>
      <div className="donate-image">
        <img src={DonateBannerImagem} alt="Imagem representativa de doação" style={styles.image} />
      </div>
    </div>
  );
}

export default Donate;
