import React from "react";
import styled from "styled-components";

// Container geral com flex
const BackgroundGeral = styled.div`
  display: flex;
  justify-content: center;
  background-color: #bdfcd2;
  padding: 20px;
`;

const BoxGeral = styled.div`
  width: 100%;
  max-width: 1200px; /* Limita a largura para não ficar grande demais */
  padding: 20px;
  `;

// Para centralizar a imagem do grupo
const BoxImageGeral = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px; /* Espaçamento entre imagem e descrição */
  `;

const ImageGeral = styled.div`
  background-color: lightblue;
  height: 400px;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
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
  flex-wrap: wrap; /* Permite que os itens que não cabem na linha se movam para a próxima linha */
  justify-content: space-between; /* Espaço entre os items */
  gap: 30px; /* Maior espaçamento entre as colunas */
  `;

const BoxPessoa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bdfcd2;
  border-radius: 10px;
  height: 650px; /* Aumentando a altura das caixas das pessoas */
  width: 30%;  /* Mudando para 30% para garantir que as caixas se ajustem ao espaço disponível */
  padding: 30px; /* Ajustando o padding para que o conteúdo não fique amontoado */
  border: 2px solid black;
  background-color: aliceblue;
  box-sizing: border-box; /* Garantir que o padding não afete a largura da caixa */

`;

const BoxImagePessoa1 = styled.div`
  height: 250px; /* Aumentando o tamanho da imagem dentro da caixa */
  width: 250px;  /* Aumentando a largura da imagem */
  margin-bottom: 20px; /* Espaço entre a imagem e o conteúdo */
  background-color: lightcoral;
`;

const TituloPessoa1 = styled.div`
  font-size: 22px;  /* Aumentando o tamanho do texto */
  font-weight: bold;
  margin-bottom: 15px;  /* Espaço entre o título e a descrição */
  text-align: center;
`;

const DescricaoPessoa1 = styled.div`
  font-size: 18px;  /* Aumentando o tamanho do texto */
  margin-bottom: 15px;  /* Espaço entre a descrição e o link */
  text-align: center;
`;

const LinkPessoa1 = styled.button`
  text-align: center;
  margin-top: 15px;  /* Espaço acima do link */
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
`;

const LinkPessoa2 = styled.button`
  text-align: center;
  margin-top: 15px;  /* Espaço acima do link */
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
`;

const LinkPessoa3 = styled.button`
  text-align: center;
  margin-top: 15px;  /* Espaço acima do link */
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
`;

// Novo componente para o texto abaixo da div das pessoas
const TextoAbaixo = styled.div`
  margin-top: 40px; /* Espaço entre as pessoas e o texto */
  padding: 20px;
  background-color: #f0f8f0; /* Cor de fundo do texto */
  border-radius: 10px;
  border: 2px solid #bbb; /* Borda suave */
  text-align: center;
  font-size: 20px;
  color: #333;
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
          <ImageGeral>
            <p>Aqui vai a imagem do grupo</p>
          </ImageGeral>
        </BoxImageGeral>

        {/* Box com as pessoas lado a lado */}
        <BoxPessoaContainer>
          {/* Pessoa 1 */}
          <BoxPessoa>
            <BoxImagePessoa1>
              <p>Aqui vai a imagem da pessoa 1</p>
            </BoxImagePessoa1>
            <TituloPessoa1>
              <h2>Felipe Wakasa</h2>
            </TituloPessoa1>
            <DescricaoPessoa1>
              <p>Aqui vai um breve texto da sua participação no trabalho</p>
            </DescricaoPessoa1>
            <LinkPessoa1>
              <a href="https://br.linkedin.com/in/felipe-wakasa-76a93a257">Link para mais informações</a>
            </LinkPessoa1>
          </BoxPessoa>

          {/* Pessoa 2 */}
          <BoxPessoa>
            <BoxImagePessoa1>
              <p>Aqui vai a imagem da pessoa 2</p>
            </BoxImagePessoa1>
            <TituloPessoa1>
              <h2>Gabriel Davanço</h2>
            </TituloPessoa1>
            <DescricaoPessoa1>
              <p>Aqui vai um breve texto da sua participação no trabalho</p>
            </DescricaoPessoa1>
            <LinkPessoa2>
              <a href="https://br.linkedin.com/in/gabriel-davan%C3%A7o-5543992b8?trk=people-guest_people_search-card">Link para mais informações</a>
            </LinkPessoa2>
          </BoxPessoa>

          {/* Pessoa 3 */}
          <BoxPessoa>
            <BoxImagePessoa1>
              <p>Aqui vai a imagem da pessoa 3</p>
            </BoxImagePessoa1>
            <TituloPessoa1>
              <h2>Isadora Teixeira</h2>
            </TituloPessoa1>
            <DescricaoPessoa1>
              <p>Aqui vai um breve texto da sua participação no trabalho</p>
            </DescricaoPessoa1>
            <LinkPessoa3>
              <a href='https://br.linkedin.com/in/isadora-teixeira-580441335?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F'>Link para mais informações</a>
            </LinkPessoa3>
          </BoxPessoa>
        </BoxPessoaContainer>
          {/* Novo espaço para o texto abaixo das pessoas */}
          <TextoAbaixo>
          <p>Esse site foi criado pelo nosso time de programadores e desenvolvedores independentes para o trabalho da faculdade, sem nenhum fim lucrativo, com o unico objetivo sendo o de aprendizagem e colocar em prática aquilo aplicado em aula.</p>
          <p> Após a escolha de uma instituição que caia nos critérios desejados, colocamos em prática nossas aulas para poder criar esse site.</p>
        </TextoAbaixo>
      </BoxGeral>
    </BackgroundGeral>
  );
}

export default Time;
