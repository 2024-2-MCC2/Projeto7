import { useState } from "react";
import styled from "styled-components";

const StyledBoxContent = styled.div`
    border: 2px solid black;
    max-width: 55%;
    margin-left: auto; 
    margin-right: auto;
    margin-top : 25px;
    margin-bottom : 25px;
    padding: 20px;
    background-color: #D9D9D9;
`

const TopicContainer = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-bottom: 40px;
`

const Topic = styled.div`
background-color: #15AC86;
color: #fff;
font-weight: bold;
font-size: 23px;
border-radius: 50%;
height: 70px;
width: 70px;
margin-right: 10px;
border: 1px solid black;
box-shadow: inset 1.7px 4px 5px #0d6952;
display: flex;
align-items: center;
justify-content: center;
`

const TopicText = styled.h2`
text-align: left;
margin: 0;
margin-left: 10px;
font-size: 23px;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    
`

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
`

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
`


function BoxContent(){

    const [PrimeiroNome, setPrimeiroNome] = useState('')
    const [UltimoNome, setUltimoNome] = useState('')
    const [Email, setEmail] = useState('')
    const [Telefone, setTelefone] = useState('')
    const [Senha, setSenha] = useState('')
    const [CSenha, setCSenha] = useState('')

    const [Pais, setPais] = useState('')
    const [Estado, setEstado] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Endereço, setEndereço] = useState('')
    const [CEP, setCEP] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <StyledBoxContent>
            <TopicContainer>
                <Topic>1.</Topic>
                <TopicText>Sobre Você</TopicText>
            </TopicContainer>
            
            <Form onSubmit={handleSubmit}>
                <Label>
                    Primeiro Nome
                   <Input
                    type="text"
                    value={PrimeiroNome}
                    onChange={(e) => setPrimeiroNome(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Ultimo Nome
                   <Input
                    type="text"
                    value={UltimoNome}
                    onChange={(e) => setUltimoNome(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Email
                   <Input
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Telefone
                   <Input
                    type="tel"
                    value={Telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="DDD+ 00000-0000"
                    required
                   />
                </Label>

                <Label>
                    Senha
                   <Input
                    type="password"
                    value={Senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Confirme sua senha
                   <Input
                    type="password"
                    value={CSenha}
                    onChange={(e) => setCSenha(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <TopicContainer>
                <Topic>2.</Topic>
                <TopicText>Seu Endereço</TopicText>
                </TopicContainer>
                
                <Label>
                    País
                   <Input
                    type="text"
                    value={Pais}
                    onChange={(e) => setPais(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Estado
                   <Input
                    type="text"
                    value={Estado}
                    onChange={(e) => setEstado(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Cidade
                   <Input
                    type="text"
                    value={Cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    Endereço
                   <Input
                    type="text"
                    value={Endereço}
                    onChange={(e) => setEndereço(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Label>
                    CEP
                   <Input
                    type="text"
                    value={CEP}
                    onChange={(e) => setCEP(e.target.value)}
                    placeholder="Digite aqui"
                    required
                   />
                </Label>

                <Button>Enviar</Button>
            </Form>
        </StyledBoxContent>
        </>
    )
}
export default BoxContent
