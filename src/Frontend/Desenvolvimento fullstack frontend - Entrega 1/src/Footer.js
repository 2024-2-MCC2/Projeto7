import Logo from './images/footerlogo.png';
import Style from './Footer.css';

function Footer (){
return(
   <pagina>
        < a href = "https://shelterbox.org/" className = "FooterLogo">  
       <img src={Logo} alt ="Logo" className = "FooterLogo"/>
       </a>
       <textoum>
       <p> Esse site é uma simulação de objetivo academicos sem fins lucrativos, o site original esta disponível ao clicar no icone acima. </p>
       </textoum>
       
         <p> A ShelterBox Trust é uma instituição de caridade registrada (1096479) e uma empresa limitada na Inglaterra e no País de Gales (04612652), registrada no IVA. A ShelterBox é uma instituição de caridade, independente do Rotary International e da Fundação Rotária.</p>
   </pagina>
)
}
export default Footer
