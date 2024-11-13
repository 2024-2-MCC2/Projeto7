import React from "react";
import styled from "styled-components";
import ImagemGrupo from "../../assets/img/Team.JPG";
import ImagemPessoa1 from "../../assets/img/felipe.JPG";
import ImagemPessoa2 from "../../assets/img/gabriel.JPG";
import ImagemPessoa3 from "../../assets/img/isadora.JPG";


const BackgroundGeral = styled.div`
  display: flex;
  justify-content: center;
  background-color: #bdfcd2;
  padding: 20px;
`;

const BoxGeral = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;


const BoxImageGeral = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ImageGeral = styled.img`
 
  width: 90%;
  object-fit: cover; 
`;

const TitulodeDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 10px;
`;

const BoxPessoaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

const BoxPessoa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-radius: 10px;
  height: 650px;
  width: 30%;
  padding: 30px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const BoxImagePessoa = styled.img`
  width: 80%;
  margin-bottom: 20px;
  margin-top:20px;
  border-radius: 10%; 
  object-fit: cover;
`;

const TituloPessoa = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const LinkPessoa = styled.button`
  text-align: center;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 150px;
  height: 60px;
  font-size: 17px;
  font-weight: bold;
  background-color: #15AC86;
  border-radius: 20px;
  border: none;
  transition: 0.35s ease-in-out;
  &:hover {
    background-color: #108265;
    border-radius: 30px;
    cursor: pointer;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const TextoAbaixo = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f8f0;
  border-radius: 10px;
  border: 2px solid #bbb;
  text-align: center;
  font-size: 22px;
  color: #333;
  font-family:Arial, Helvetica, sans-serif;
`;

function Time() {
  return (
    <BackgroundGeral>
      <BoxGeral>
        <TitulodeDescricao>
          <h1>Sobre o nosso time</h1>
        </TitulodeDescricao>

        {/* Imagem do grupo */}
        <BoxImageGeral>
          <ImageGeral src={ImagemGrupo} alt="Imagem do grupo" />
        </BoxImageGeral>

        {/* Box com as pessoas lado a lado */}
        <BoxPessoaContainer>
          {/* Pessoa 1 */}
          <BoxPessoa>
            <BoxImagePessoa src={ImagemPessoa1} alt="Imagem de Felipe Wakasa" />
            <TituloPessoa>
              <h2>Felipe Wakasa</h2>
            </TituloPessoa>
            <LinkPessoa>
              <a href="https://br.linkedin.com/in/felipe-wakasa-76a93a257">Link para mais informações</a>
            </LinkPessoa>
          </BoxPessoa>

          {/* Pessoa 2 */}
          <BoxPessoa>
            <BoxImagePessoa src={ImagemPessoa2} alt="Imagem de Gabriel Davanço" />
            <TituloPessoa>
              <h2>Gabriel Davanço</h2>
            </TituloPessoa>
            <LinkPessoa>
              <a href="https://br.linkedin.com/in/gabriel-davan%C3%A7o-5543992b8?trk=people-guest_people_search-card">Link para mais informações</a>
            </LinkPessoa>
          </BoxPessoa>

          {/* Pessoa 3 */}
          <BoxPessoa>
            <BoxImagePessoa src={ImagemPessoa3} alt="Imagem de Isadora Teixeira" />
            <TituloPessoa>
              <h2>Isadora Teixeira</h2>
            </TituloPessoa>
            <LinkPessoa>
              <a href="https://br.linkedin.com/in/isadora-teixeira-580441335?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F">Link para mais informações</a>
            </LinkPessoa>
          </BoxPessoa>
        </BoxPessoaContainer>

        {/* Texto abaixo das pessoas */}
        <TextoAbaixo>
          <p>Esse site foi criado pelo nosso time de programadores e desenvolvedores independentes para o trabalho da faculdade, sem nenhum fim lucrativo, com o único objetivo sendo o de aprendizagem e colocar em prática aquilo aplicado em aula.</p>
          <p>Após a escolha de uma instituição que caia nos critérios desejados, colocamos em prática nossas aulas para poder criar esse site.</p>
        </TextoAbaixo>
      </BoxGeral>
    </BackgroundGeral>
  );
}

export default Time;
