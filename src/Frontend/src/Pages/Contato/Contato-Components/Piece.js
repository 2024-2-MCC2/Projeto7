import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 40px;
  text-align: center;
  background-color:#ccffcc;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #2f4f2f;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: #2f4f2f;
  font-weight: bold;
`;

const Address = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
`;

const Phone = styled.a`
  font-size: 20px;
  color: black;
  text-decoration: none;
  display: block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const UpdateText = styled.h3`
  font-size: 30px;
  color: #2f4f2f;
  margin: 40px 0 20px 0;
`;

const FollowText = styled.p`
  font-size: 16px;
  color: #555;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: #2f4f2f;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Piece = () => {
  return (
    <SectionWrapper>
      <Title>NOSSA LOCALIZAÇÃO</Title>
      <SubTitle>Sede da ShelterBox</SubTitle>
      <Address>Falcon House, Charles Street, Truro, TR12PH, UK</Address>
      <Phone href="tel:+440300500">+44 (0)300 0300 500</Phone>

      <UpdateText>FIQUE ATUALIZADO</UpdateText>
      <FollowText>
        Para obter as informações mais recentes sobre o que a ShelterBox está fazendo siga-nos em nossas redes:
      </FollowText>
      <SocialLinks>
        <a href="https://www.youtube.com/user/shelterboxuk" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.facebook.com/ShelterBox/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://x.com/shelterbox" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/shelterboxuk/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </SocialLinks>
    </SectionWrapper>
  );
};

export default Piece;
