import Logo from '../assets/img/footerlogo.png';
import styled from 'styled-components';

const FooterContainer = styled.footer`
font-family: 'Times New Roman', Times, serif;
font-size: medium;
text-align: center;
position: relative;
background-color: #1d371b;
color: #fff;
padding: 40px;
margin-top: 10%;
`

const Footerimg = styled.img`
  text-align: center;
  bottom: 0;
  width: 200px;
  transform: translateX(-50%);
  transform: translateY(-50%);
 

`;

function Footer (){
return(
   <pagina>
    <FooterContainer>

        < a href = "https://shelterbox.org/" className = "FooterLogo">  
       <Footerimg src={Logo} alt ="Logo" className = "FooterLogo"/>
       </a>

       <textoum>
       <p> Esse site é uma simulação de objetivo academicos sem fins lucrativos, o site original esta disponível ao clicar no icone acima. </p>
       </textoum>
       
         <p> A ShelterBox Trust é uma instituição de caridade registrada (1096479) e uma empresa limitada na Inglaterra e no País de Gales (04612652), registrada no IVA. A ShelterBox é uma instituição de caridade, independente do Rotary International e da Fundação Rotária.</p>
   </FooterContainer>
   </pagina>

)
}
export default Footer