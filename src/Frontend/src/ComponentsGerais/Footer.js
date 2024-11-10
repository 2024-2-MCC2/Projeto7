import Logo from '../assets/img/footerlogo.png';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineX } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const FooterContainer = styled.footer`
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;
  text-align: center;
  position: relative;
  background-color: #1d371b;
  color: #fff;
  padding: 40px;
  /* margin-top: 10%; */
  display: flex;
  justify-content: space-between;
`;

const ImgTextContainer = styled.div`
/* border: 2px solid; */
max-width: 33%
`

const ImgContainer = styled.div`
  max-width: fit-content;
`;

const TextContainer = styled.div`
  max-width: 80%;
`;

const FooterImg = styled.img`
  width: 200px;
  text-align: center;
`;

const Texto = styled.p`
  font-size: 21px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 33%;
  /* border: 2px solid; */
  gap: 20px;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 21px;
    max-height: 1.5em;
    /* border: 2px solid; */

    &:hover {
      color: lightgray;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  /* border: 2px solid; */
  width: 33%;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 35px;

    &:hover {
      color: lightgray;
      transition: all 0.2s ease-in-out;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ImgTextContainer>
        <ImgContainer>
          <a href="https://shelterbox.org/" className="FooterLogo">
            <FooterImg src={Logo} alt="Logo" className="FooterLogo" />
          </a>
        </ImgContainer>

        <TextContainer>
          <Texto>Esse site é uma simulação de objetivo academicos sem fins lucrativos, o site original esta disponível ao clicar no icone acima.</Texto>
          <Texto>A ShelterBox Trust é uma instituição de caridade registrada (1096479) e uma empresa limitada na Inglaterra e no País de Gales (04612652), registrada no IVA. A ShelterBox é uma instituição de caridade, independente do Rotary International e da Fundação Rotária.</Texto>
        </TextContainer>
      </ImgTextContainer>

          <LinksContainer>
            <Link onClick={ScrollToTop} to="/sobre-nos">Sobre Nós</Link>
            <Link onClick={ScrollToTop} to="/contato">Contato</Link>
            <Link onClick={ScrollToTop} to="/donate">Doação</Link>
          </LinksContainer>

      <SocialLinks>
        <a href="https://www.youtube.com/user/shelterboxuk" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/ShelterBox/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/shelterbox" target="_blank" rel="noopener noreferrer">
          <AiOutlineX />
        </a>
        <a href="https://www.instagram.com/shelterboxuk/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialLinks>
    </FooterContainer>
  )
}

export default Footer;
