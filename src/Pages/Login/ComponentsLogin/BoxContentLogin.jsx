import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBoxContent = styled.div`
    border: 2px solid black;
    max-width: 55%;
    margin-left: auto; 
    margin-right: auto;
    margin-top : 25px;
    margin-bottom : 40px;
    padding: 20px;
    background-color: #D9D9D9;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; /* Garante que os inputs fiquem em coluna */
`;

const Input = styled.input`
    padding: 10px;
    border-bottom: 4px solid #000;
    border-left: 3px solid #000;
    border-radius: 2px;
    background-color: #bbbbbb;
    color: #000;
    margin-top: 10px;
    width: 50%;
    display: flex;
    margin-bottom: 50px;

    &:focus {
        border-color: #1a946f;
        outline: none;
    }

    &:hover{
        border-color: #125c46;
        transition: 0.2s ease-in-out;
    }
`;

const Label = styled.label`
    color: black;
    font-weight: bold;
    font-size: 20px;
`

const Button = styled.button`
      margin: auto;
    margin-top: 25px;
    margin-bottom:15px;
    background-color: #15AC86;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    width: 215px;
    height: 75px;
    border: 1px black solid;
    border-radius: 5px;
    box-shadow: inset 1.7px 4px 5px #0d6952;



&:hover{
    color: #dbdbdb;
    background-color: #108b6d;
    box-shadow: inset 1.7px 4px 5px #0a5140;
    transition: 0.2s ease-in-out;
    cursor: pointer;
} 
`;

function BoxContent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Senha:', password);
        // Aqui você pode adicionar a lógica para o login
    };

    return (
        <StyledBoxContent>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Email: 
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </Label>
                <Label>
                    Senha:
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </Label>
                <Button type="submit">Entrar</Button>
            </Form>
        </StyledBoxContent>
    );
}

export default BoxContent;
