import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #2f4f2f;
  font-size: 32px;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ebebeb;
  &:focus {
    border-color: #2f4f2f;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ebebeb;
  resize: none;
  &:focus {
    border-color: #2f4f2f;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #15ac86;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #108b6d;
  }
`;

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio do formulário
  };

  return (
    <FormWrapper>
      <FormTitle>TEM UMA PERGUNTA?</FormTitle>
      <FormSubtitle>
        Se você não encontrar o que precisa, sinta-se à vontade para nos enviar uma mensagem através do formulário abaixo ou ligue para  +44 (0)300 0300 500.
      </FormSubtitle>
      <StyledForm onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="digite aqui"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="motivo">Motivo do contato</Label>
        <Input
          type="text"
          id="motivo"
          placeholder="Digite o motivo do contato"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          required
        />

        <Label htmlFor="mensagem">Sua mensagem</Label>
        <Textarea
          id="mensagem"
          rows="5"
          placeholder="Digite sua mensagem aqui"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <Button type="submit">Enviar</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Formulario;
