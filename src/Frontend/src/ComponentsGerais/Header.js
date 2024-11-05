import {Link} from 'react-router-dom'
import Logo from '../assets/img/Logo.png';
import styled from 'styled-components';

const NavImage = styled.img`
  margin: 20px 0px;
  max-width: 220px;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1D371B;
`

const GroupNav = styled.div` 
display: flex;
list-style-type: none;
`

const ButtonNav = styled.button`
 display: flex; 
 justify-content: center;
 align-items: center;
 font-size: 1em;
 background-color: #006611;
  margin: 1em 3em;
  padding: 0.25em 1em;
  border: none;
  color: #fff;
  width: 175px;
  transition: 0.3s ease-in-out;

&:hover {
  background-color: #00a690;
  text-decoration: underline 2px;
}

a{
  font-size: 25px;
  font-family: 'Arial Narrow', Arial, sans-serif;
  color: #fff;
  text-decoration: none;
}
`

const TopButtons = styled.div`
display: flex;
`
const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

const ButtonCadastro = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 55px;
font-size: 23px;
font-weight: bold;
background-color: #15AC86;
border-radius: 2px;
transition: 0.35s ease-in-out;

&:hover{
  background-color: #108265;
  cursor: pointer;
}

a{
  color: #FFF;
  text-decoration: none;
}
`

const ButtonLogin = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 55px;
font-size: 23px;
font-weight: bold;
background-color: #DAFFF6;
border-radius: 2px;
transition: 0.35s ease-in-out;

&:hover{
  background-color: #88c8b8;
  cursor: pointer;
}

a{
  color: #0D2C1A;
  text-decoration: none;
}
`

const ButtonDoar = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
width: 150px;
height: 55px;
font-size: 23px;
font-weight: bold;
background-color: #E73131;
border-radius: 2px;
transition: 0.35s ease-in-out;

a{
  color: #FFF;
  text-decoration: none;
}

&:hover{
  background-color: #831f1f;
  cursor: pointer;
}
`

const SearchBar = styled.input`
margin-top: 15px;
margin-right: 10px;
width: 75%;
height: 30px;
border: 2px solid black;
outline: none;
border-radius: 2px;
background-color: #D9D9D9;
`





export default function Header() {
  return (
    <nav className="nav">
      <NavContainer>
        <Link to="/">
          <NavImage src={Logo} alt="Logo" className="Logo" />
        </Link>
        
        <ul>
          <GroupNav>
            <ButtonNav>
              <Link to="/nossotrabalho">Nosso Trabalho</Link> 
            </ButtonNav>

            <ButtonNav>
              <Link to="/historias">Histórias</Link> 
            </ButtonNav>

            <ButtonNav>
              <Link to="/sobre-nos">Sobre Nós</Link> 
            </ButtonNav>

            <ButtonNav>
              <Link to="/tome-acao">Tome Ação</Link> 
            </ButtonNav>
          </GroupNav>
        </ul>

        <ButtonGroup>
          <TopButtons>
            <ButtonCadastro>
              <Link to="/cadastro">Cadastro</Link> 
            </ButtonCadastro>

            <ButtonDoar>
              <Link to="/donate">Donate</Link> 
            </ButtonDoar>

            <ButtonLogin>
              <Link to="/login">Login</Link> 
            </ButtonLogin>
          </TopButtons>

          <SearchBar placeholder="Pesquisa" />
        </ButtonGroup>
      </NavContainer>
    </nav>
  );
}

function CustomLink({href, children,...props}){ //CustomLink renderiza um link personalizado com funcionalidade de ativação baseada na url atual
    const path = window.location.pathname
  return (
    <li className={path===href ? "active" : ""}>
        <a href= {href} {...props}> {children} </a>
    </li>
  )
}

//essa passagem esta verificando se o caminho atual é igual ao href e se for adiciona a classe active ao elemento li e renderiza o elemento a com o href passando as propriedades adicionais ("props") e renderiza o conteudo do link dentro do elemento a

//children é o conteúdo do link
//href é o caminho 
    //props são propriedades adicionais 