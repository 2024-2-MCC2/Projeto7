import Logo from '../assets/img/footerlogo.png';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineX } from "react-icons/ai";

const FooterContainer = styled.footer`
font-family: 'Times New Roman', Times, serif;
font-size: medium;
text-align: center;
position: relative;
background-color: #1d371b;
color: #fff;
padding: 40px;
margin-top: 10%;
display: flex;
justify-content: space-evenly;
`

const ImgContainer = styled.div`
max-width: fit-content;
`

const TextContainer = styled.div`
max-width: 25%;
`

const FooterImg = styled.img`
  text-align: center;
  bottom: 0;
  width: 200px;
  transform: translateX(-50%);
  transform: translateY(-50%);
`;

const Texto = styled.p`
font-size: 21px;
text-align: left;
font-family: Arial, Helvetica, sans-serif;
`

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 35px; /* Tamanho do ícone */

    &:hover {
      color: lightgray; 
      transition: all 0.2s ease-in-out;
    }
  }
`;

function Footer() {
  return (
    <pagina>
      <FooterContainer>
        <div>
          <ImgContainer>
            <a href="https://shelterbox.org/" className="FooterLogo">
              <FooterImg src={Logo} alt="Logo" className="FooterLogo" />
            </a>
          </ImgContainer>
          <TextContainer>
            <Texto>Esse site é uma simulação de objetivo academicos sem fins lucrativos, o site original esta disponível ao clicar no icone acima.</Texto>
            <Texto> A ShelterBox Trust é uma instituição de caridade registrada (1096479) e uma empresa limitada na Inglaterra e no País de Gales (04612652), registrada no IVA. A ShelterBox é uma instituição de caridade, independente do Rotary International e da Fundação Rotária.</Texto>
          </TextContainer>
        </div>
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
    </pagina>
  )
}
export default Footer