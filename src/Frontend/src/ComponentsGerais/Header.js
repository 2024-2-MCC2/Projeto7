import { Link } from 'react-router-dom';
import Logo from '../assets/img/headerlogobranca.png';
import styled from 'styled-components';
import ScrollToTop from './ScrollToTop';

const NavImage = styled.img`
  padding-left: 20px;
  max-width: 240px;
  
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1D371B;
  height: 130px;
`;

const GroupNav = styled.ul` 
  display: flex;
  list-style-type: none;
  gap: 10px;
`;

const ButtonNav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 0.25em 1em;
  transition: 0.3s ease-in-out;

  &:hover {
    text-decoration: underline 2px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ButtonCadastro = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 155px;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  background-color: #15AC86;
  border-radius: 2px;
  color: #FFF;
  text-decoration: none;
  transition: 0.35s ease-in-out;

  &:hover {
    background-color: #108265;
  }
`;

const ButtonLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 155px;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  background-color: #DAFFF6;
  border-radius: 2px;
  color: #0D2C1A;
  text-decoration: none;
  transition: 0.35s ease-in-out;

  &:hover {
    background-color: #88c8b8;
  }
`;

const ButtonDoar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 155px;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  background-color: #E73131;
  border-radius: 2px;
  color: #FFF;
  text-decoration: none;
  transition: 0.35s ease-in-out;

  &:hover {
    background-color: #831f1f;
  }
`;

const HeaderFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
`;

export default function Header() {
  return (
    <HeaderFixed>
      <nav>
        <NavContainer>
          <Link onClick={ScrollToTop} to="/">
            <NavImage src={Logo} alt="Logo" />
          </Link>

          <GroupNav>
            <li><ButtonNav onClick={ScrollToTop} to="/nossotrabalho">Nosso Trabalho</ButtonNav></li>
            <li><ButtonNav onClick={ScrollToTop} to="/historias">Histórias</ButtonNav></li>
            <li><ButtonNav onClick={ScrollToTop} to="/sobre-nos">Sobre Nós</ButtonNav></li>
            <li><ButtonNav onClick={ScrollToTop} to="/tome-acao">Tome Ação</ButtonNav></li>
          </GroupNav>

          <ButtonGroup>
            <ButtonCadastro onClick={ScrollToTop} to="/cadastro">Cadastro</ButtonCadastro>
            <ButtonLogin onClick={ScrollToTop} to="/login">Login</ButtonLogin>
            <ButtonDoar onClick={ScrollToTop} to="/donate">Doação</ButtonDoar>
          </ButtonGroup>
        </NavContainer>
      </nav>
    </HeaderFixed>
  );
}
