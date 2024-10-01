import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBoxContent = styled.div`
    border: 2px solid black;
    max-width: 85%;
    margin: auto;
    padding: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column; /* Garante que os inputs fiquem em coluna */
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 15px;

    &:focus {
        border-color: #1a946f;
        outline: none;
    }
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #1FC794;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #1a946f;
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
                <label>
                    Email: 
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </label>
                <label>
                    Senha:
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                </label>
                <Button type="submit">Entrar</Button>
            </Form>
        </StyledBoxContent>
    );
}

export default BoxContent;