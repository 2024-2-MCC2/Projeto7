import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
//import Imagem from '../../../src/assets/img/NossoTime.png';

const BackgroundInicial = styled.div`
  padding: 20px;
  background-color: aliceblue;
  height: 450px;
  gap: 20px;  // Espaçamento entre os itens (imagem e texto)
`;

const BoxTituloInicial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
 height: 100px;
 width: 500px;
 margin-left: 600px; //jeito sujo de deixar o titulo no meio 
 justify-content: center;
`;

const TituloInicial = styled.div`
  text-align: center;
  color: darkgreen;
  font-size: 25px;
  font-weight: bold;
`;

const BoxImageETexto = styled.div`
 display: flex;
 justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const BoxTextoInicial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 500px;
  margin-top: 20px;
`;

const TextoInicial = styled.div`
display: flex;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
`;

const BoxImagemInicial = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  height: 300px;
  width: 900px;
  margin-top: 20px;
  background-color: lightgreen;
`;

const BackgroundMeioInicial = styled.div`
     background-color: #dafff7;
     height: 900px;
`

const BoxContainerMeioInicial = styled.div`
`
const BoxTituloMeioInicial= styled.div`
display: flex;
height: 100px;
width: 650px;
margin-left: 600px;
text-align: center;
justify-content: center;
`

const TituloMeioInicial= styled.div`
display: flex;
text-align: center;
justify-content: center;
width: 600px;
`

const BoxTextoMeioInicial= styled.div`
justify-content: center;
text-align: center;
height: 80px; //por algm motivo isso mexe a posição da imagem do lado (nao sei como arrumar)
width: 600px;
margin-left: 1000px;
`
const TextoMeioInicial= styled.div`
justify-content: center;
text-align: center;
font-size: 25px;
height: 3px;
`
const BoxImagemMeioInicial = styled.div`
  display: flex;
  position: sticky;
  justify-content: right;
  align-items: right;
  height: 500px;
  width: 900px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: lightgreen;`

const BackgroundMeio1 = styled.div`
    display: flex;
    background-color: #bdfcd2;
    padding: 20px;
`
const BoxContainerMeio1 = styled.div`
display: flexbox;
text-align: center;
margin-left: 450px;
justify-content: center;
height: 400px;
`

const BoxTituloMeio1 = styled.div`
    text-align: center;
  font-size: 25px;
  font-weight: bold;
`

const TituloMeio1 = styled.div`
`
const BoxTextoMeio1 = styled.div`
display: flex;
text-align: center;
justify-content: center;
width: 900px;
height: 700px;
`
const TextoMeio1 = styled.div`
text-align: center;
 font-size: 20px;
 height: 100px;
`
const BackgroundMeio2 = styled.div`
   
`

const BoxOpcaoContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens que não cabem na linha se movam para a próxima linha */
  justify-content: space-between; /* Espaço entre os items */
  gap: 2px; /* Maior espaçamento entre as colunas */
  `;

const BoxOpcao= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bdfcd2;
  border-radius: 10px;
  height: 600px; /* Aumentando a altura das caixas */
  width: 30%;  /* Mudando para 30% para garantir que as caixas se ajustem ao espaço disponível */
  padding: 20px; /* Ajustando o padding para que o conteúdo não fique amontoado */
  border: 2px solid black;
  background-color: aliceblue;
  box-sizing: border-box; /* Garantir que o padding não afete a largura da caixa */

`;

const BoxImageOpcao1 = styled.div`
  height: 300px; /* Aumentando o tamanho da imagem dentro da caixa */
  width: 250px;  /* Aumentando a largura da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e o conteúdo */
  background-color: lightcoral;
`;

const TituloOpcao1 = styled.div`
  font-size: 22px;  /* Aumentando o tamanho do texto */
  font-weight: bold;
  margin-bottom: 10px;  /* Espaço entre o título e a descrição */
  text-align: center;
`;

const DescricaoOpcao1 = styled.div`
  font-size: 18px;  /* Aumentando o tamanho do texto */
  margin-bottom: 15px;  /* Espaço entre a descrição e o link */
  text-align: center;
`;

const BoxButtonSaibaMais = styled.div`
display: flex;
 justify-content: center;
 text-align: center;
`
const ButtonSaibaMais = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 100px;
font-size: 23px;
font-weight: bold;
background-color: #15AC86;
border-radius: 20px; //deixar redondinho
border:none;
transition: 0.35s ease-in-out;
  &:hover{
  background-color: #108265;
  border-radius: 30px;
  cursor: pointer;
}
a{
  color: #fff;
  text-decoration: none;
}
`

function FacaPartedoTime() {
  return (
    <div className="main-content">
      <BackgroundInicial>
        {/* Box de Título */}
        <BoxTituloInicial>
          <TituloInicial>
            <h1>Faça parte do time ShelterBox!</h1>
          </TituloInicial>
        </BoxTituloInicial>

{/* Box de Texto e Imagem juntos*/}
 <BoxImageETexto>
        {/* Box de Texto */}
        <BoxTextoInicial>
          <TextoInicial>
            <h1>Seja um voluntário e amplifique as vozes das pessoas que apoiamos</h1>
          </TextoInicial>
        </BoxTextoInicial>

        {/* Box de Imagem */}
        <BoxImagemInicial>
          {/* <img src={Imagem} alt="Imagem do Time" /> */}
          {/* Colocar imagem aqui */}
        </BoxImagemInicial>
        </BoxImageETexto>
      </BackgroundInicial>

<BackgroundMeioInicial>
     {/* Box de Container*/}
<BoxContainerMeioInicial>

      {/* Box do Titulo*/}
      <BoxTituloMeioInicial>
      <TituloMeioInicial>
         <h1> Por que se voluntariar com o ShelterBox? </h1>
         </TituloMeioInicial>
      </BoxTituloMeioInicial>

       {/* Box do Texto*/}
       <BoxTextoMeioInicial>
        <TextoMeioInicial>
            <p> Os voluntários da ShelterBox apoiam o trabalho para um futuro onde ninguém está sem abrigo após desastre. </p>
            <p>Alguns ajudam a aumentar a conscientização sobre o trabalho através de palestras e eventos. Os voluntários podem ajudar a apoiar campanhas de arrecadação de fundos e apoiar eventos de captação de recursos. Alguns de seus voluntários também viajam para os lugares onde a instituição esta trabalhando para apoiar suas equipes e parceiros no terreno.</p>
            <p> A ShelterBox gosta que seus voluntários se sintam recompensados por apoia-los! Seus voluntários poderão conhecer pessoas com ideias semelhantes. Também dão treinamento,apoio e uma valiosa experiência de trabalho. Com o voluntariado você pode ter uma experiência flexível, escolhendo um papel para se adequar a você. E eles verificão se você está satisfeito e ver o que o ShelterBox pode fazer para melhorar a experiência.</p>
        </TextoMeioInicial>
       </BoxTextoMeioInicial>

        {/* Box da imagem*/}
<BoxImagemMeioInicial>
    {/* <img src={Imagem} alt="Imagem" /> */}
</BoxImagemMeioInicial>
    </BoxContainerMeioInicial> 
</BackgroundMeioInicial>


<BackgroundMeio1>
   {/* Box de Container*/}
<BoxContainerMeio1>
   {/* Box do Titulo*/}
   <BoxTituloMeio1>
      <TituloMeio1>
         <h1> Nossos voluntários </h1>
      </TituloMeio1>
   </BoxTituloMeio1>
   {/* Box do Texto*/}
   <BoxTextoMeio1>
<TextoMeio1>
     <p> Cada voluntário da ShelterBox é fundamental para fornecer abrigo para famílias após o desastre, onde quer que estejam no mundo.</p>

     <p> Eles generosamente nos dão suas habilidades, conhecimentos e tempo e são membros vitais da família ShelterBox.
     </p>

     <p> Você está interessado em se juntar à equipe de voluntários da ShelterBox? Veja as oportunidades atuais abaixo!
     </p>
</TextoMeio1>
</BoxTextoMeio1>
</BoxContainerMeio1>
</BackgroundMeio1>

<BackgroundMeio2>
     {/* Box com as opções lado a lado */}
     <BoxOpcaoContainer>
          {/* Opção 1 */}
          <BoxOpcao>
            <BoxImageOpcao1>
              <p>Aqui vai a imagem</p>
            </BoxImageOpcao1>
            <TituloOpcao1>
              <h2> Embaixador ShelterBox</h2>
            </TituloOpcao1>
            <DescricaoOpcao1>
              <p>Como embaixador você amplifica as vozes das pessoas afetadas pelo desastre e conflito, compartilha suas histórias, aumenta a conscientização sobre o trabalho que fazemos com os membros de sua comunidade, inspira a captação de recursos e mais envolvimento com a ShelterBox.</p>
            </DescricaoOpcao1>
            <BoxButtonSaibaMais>
<ButtonSaibaMais> <Link to ="https://shelterbox.org/volunteer/ambassadors/"> Se inscreva!</Link> </ButtonSaibaMais>
</BoxButtonSaibaMais>
          </BoxOpcao>

          {/* Opção 2 */}
          <BoxOpcao>
            <BoxImageOpcao1>
              <p>Aqui vai a imagem</p>
            </BoxImageOpcao1>
            <TituloOpcao1>
              <h2>Coordenadores do Distrito Rotário</h2>
            </TituloOpcao1>
            <DescricaoOpcao1>
              <p>O foco deste papel de networking será tornar-se a voz da ShelterBox em todo o seu Distrito, apoiando a parceria do projeto que compartilhamos; desenvolvendo uma conexão com os Rotary Clubs e ajudando a galvanizar seu apoio</p>
            </DescricaoOpcao1>
            <BoxButtonSaibaMais>
<ButtonSaibaMais> <Link to ="https://shelterbox.org/volunteer/rotary-district-coordinators/"> Se inscreva!</Link> </ButtonSaibaMais>
</BoxButtonSaibaMais>
          </BoxOpcao>

          {/* Opção 3 */}
          <BoxOpcao>
            <BoxImageOpcao1>
              <p>Aqui vai a imagem</p>
            </BoxImageOpcao1>
            <TituloOpcao1>
              <h2>Equipe de resposta</h2>
            </TituloOpcao1>
            <DescricaoOpcao1>
              <p>Após um desastre ou conflito, nossos Voluntários da Equipe de Resposta deixam suas próprias famílias para viajar pelo mundo e entregar abrigo, ferramentas e outros itens essenciais para as famílias que mais precisam deles. </p>
              <p>As condições podem ser muito desafiadoras. Pode ser fisicamente e mentalmente exigente. Tornar-se um membro da equipe de resposta é uma enorme responsabilidade, mas também pode ser incrivelmente gratificante.</p>
              <BoxButtonSaibaMais>
<ButtonSaibaMais> <Link to ="/timedosite"> Se inscreva!</Link> </ButtonSaibaMais>
</BoxButtonSaibaMais>
            </DescricaoOpcao1>
          </BoxOpcao>
        </BoxOpcaoContainer>
</BackgroundMeio2>

    </div>
  );
}

export default FacaPartedoTime;
