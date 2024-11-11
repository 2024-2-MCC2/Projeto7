import { Link } from 'react-router-dom'
import Logo from '../assets/img/Logo.png';
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';

const NavImage = styled.img`
  margin: 20px 0px;
  max-width: 220px;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1D371B;
    height: 150px;
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
 font-weight: bold;
 background-color: #1D371B;
  margin: 1em 2em;
  padding: 0.25em 1em;
  border: none;
  color: #fff;
  width: 220px;
  transition: 0.3s ease-in-out;

&:hover {
  text-decoration: underline 2px;
}

a{
  font-size: 24px;
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
width: 175px;
height: 70px;
font-size: 24px;
font-weight: bold;
background-color: #15AC86;
border-radius: 2px;
transition: 0.35s ease-in-out;
border: none;

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
width: 175px;
height: 70px;
font-size: 24px;
font-weight: bold;
background-color: #DAFFF6;
border-radius: 2px;
transition: 0.35s ease-in-out;
border: none;

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
width: 175px;
height: 70px;
font-size: 24px;
font-weight: bold;
background-color: #E73131;
border-radius: 2px;
transition: 0.35s ease-in-out;
border: none;

a{
  color: #FFF;
  text-decoration: none;
}

&:hover{
  background-color: #831f1f;
  cursor: pointer;
}
`

const HeaderFixed = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000; 
background-color: #fff; 
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
height: 60px; /* Altura fixa do header */
`

// const SearchBar = styled.input`
// margin-top: 15px;
// margin-right: 10px;
// width: 75%;
// height: 30px;
// border: 2px solid black;
// outline: none;
// border-radius: 2px;
// background-color: #D9D9D9;
// `





export default function Header() {
  return (
    <HeaderFixed>
      <nav className="nav">
        <NavContainer>
          <Link onClick={ScrollToTop} to="/">
            <NavImage src={Logo} alt="Logo" className="Logo" />
          </Link>

          <ul>
            <GroupNav>
              <ButtonNav>
                <Link onClick={ScrollToTop} to="/nossotrabalho">Nosso Trabalho</Link>
              </ButtonNav>

              <ButtonNav>
                <Link onClick={ScrollToTop} to="/historias">Histórias</Link>
              </ButtonNav>

              <ButtonNav>
                <Link onClick={ScrollToTop} to="/sobre-nos">Sobre Nós</Link>
              </ButtonNav>

              <ButtonNav>
                <Link onClick={ScrollToTop} to="/tome-acao">Tome Ação</Link>
              </ButtonNav>
            </GroupNav>
          </ul>

          <ButtonGroup>
            <TopButtons>
              <ButtonCadastro>
                <Link onClick={ScrollToTop} to="/cadastro">Cadastro</Link>
              </ButtonCadastro>

              <ButtonDoar>
                <Link onClick={ScrollToTop} to="/donate">Doação</Link>
              </ButtonDoar>

              <ButtonLogin>
                <Link onClick={ScrollToTop} to="/login">Login</Link>
              </ButtonLogin>
            </TopButtons>
          </ButtonGroup>
        </NavContainer>
      </nav>
    </HeaderFixed>
  );
}

function CustomLink({ href, children, ...props }) { //CustomLink renderiza um link personalizado com funcionalidade de ativação baseada na url atual
  const path = window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}> {children} </a>
    </li>
  )
}

//essa passagem esta verificando se o caminho atual é igual ao href e se for adiciona a classe active ao elemento li e renderiza o elemento a com o href passando as propriedades adicionais ("props") e renderiza o conteudo do link dentro do elemento a

//children é o conteúdo do link
//href é o caminho
//props são propriedades adicionais 
