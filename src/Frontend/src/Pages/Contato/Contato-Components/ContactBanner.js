import React from 'react';
import styled from 'styled-components';
import ContactImage from '../img/contact-image.jpg'; // Certifique-se de que o caminho está correto

const ContactBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #ccffcc;
  max-width: 1400px;  /* Define uma largura máxima para o banner */
  margin: 0 auto;     /* Centraliza o banner na página */
`;

const ContactText = styled.div`
  h2 {
    color: #2f4f2f;
    font-size: 3rem; /* Aumentando o tamanho do texto */
    margin-right: 20px;
  }
`;

const Image = styled.div`
  width: 500px;  /* Aumenta a área da imagem */
  height: 400px; /* Ajuste o tamanho para ser maior */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 140px;
  

  img {
    max-width: 150%;  /* A imagem ocupa toda a largura disponível */
    max-height: 90%; /* Mantém a proporção */
    object-fit: cover; /* Garante que a imagem preencha a área */
  }
`;

const ContactBanner = () => {
  return (
    <ContactBannerWrapper>
      <ContactText>
        <h2>Contate-nos</h2>
      </ContactText>
      <Image>
        <img src={ContactImage} alt="Contate-nos" />
      </Image>
    </ContactBannerWrapper>
  );
};

export default ContactBanner;
