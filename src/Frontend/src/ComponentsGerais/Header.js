import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/img/headerlogobranca.png';
import ScrollToTop from './ScrollToTop';

const NavImage = styled.img`
  padding-left: 20px;
  max-width: 260px;
  padding: 0%;
 `;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1D371B;
  height: 150px;
`;

const GroupNav = styled.ul`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 10px;
  padding: 0%;
`;

const ButtonNav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 0.25em 1em;
  transition: 0.3s;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 20px;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  width: 175px;
  height: 70px;
  border: none;
  border-radius: 2px;
  transition: background-color 0.35s;
  background-color: ${(props) => props.bgColor};

  &:hover {
    background-color: ${(props) => props.hoverColor};
    cursor: pointer;
  }
`;

const HeaderFixed = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export default function Header() {
  return (
    <HeaderFixed>
      <NavContainer>
        <Link to="/" onClick={ScrollToTop}>
          <NavImage src={Logo} alt="Logo" />
        </Link>

        <GroupNav>
          {['Nosso Trabalho', 'Histórias', 'Sobre Nós', 'Tome Ação'].map((text) => (
            <ButtonNav key={text} to={`/${text.toLowerCase().replace(' ', '-')}`} onClick={ScrollToTop}>
              {text}
            </ButtonNav>
          ))}
        </GroupNav>

        <ButtonGroup>
          <Button to="/cadastro" bgColor="#15AC86" hoverColor="#108265" onClick={ScrollToTop}>Cadastro</Button>
          <Button to="/login" bgColor="#DAFFF6" hoverColor="#88c8b8" onClick={ScrollToTop} style={{ color: '#0D2C1A' }}>Login</Button>
          <Button to="/donate" bgColor="#E73131" hoverColor="#831f1f" onClick={ScrollToTop}>Doação</Button>
        </ButtonGroup>
      </NavContainer>
    </HeaderFixed>
  );
}
