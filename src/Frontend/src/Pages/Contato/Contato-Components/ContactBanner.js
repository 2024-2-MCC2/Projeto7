import React from 'react';
import styled from 'styled-components';
import ContactImage from '../../../assets/img/contact-image.jpg'; 

const ContactBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  background-color: #ccffcc;
  max-width: 1400px; 
  margin: 0 auto;     
`;

const ContactText = styled.div`
  h2 {
    color: #2f4f2f;
    font-size: 3rem; 
    margin-right: 20px;
  }
`;

const Image = styled.div`
  width: 500px;  
  height: 400px; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 140px;
  

  img {
    max-width: 150%;  
    max-height: 90%; 
    object-fit: cover; 
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
