
import Navbar from './Navbar';

import Doacoes from './Paginas/Doacoes';
import Noticias from './Paginas/Noticias';
import SobreNos from './Paginas/SobreNos';
import Home from './Paginas/Home';
import Historias from './Paginas/Historias';
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';
import Donate from './Paginas/Donate';

import Footer from './Footer';

function App() {
  let Component
  switch (window.location.pathname){ //isso faz com que la no nome da Página mude de nome
    case "/":
      Component = <Home/> 
    break;

    case "/doacoes": // quando for "doacoes" o componente em cima sera de Doacoes
      Component = <Doacoes/>
      break;

      case "/sobre":
        Component = <SobreNos/>
        break;

        case "/cursos":
          Component = <Noticias/> 
          break;

          case "/historias":
          Component = <Historias/> 
          break;

          case "/cadastro":
            Component = <Cadastro/>
            break;

            case "/login":
              Component = <Login/>
              break;

              case "/donate":
                Component = <Donate/>
                break;
  }
  return (
    <>

  <Navbar/>
  <div className = "container"> {Component}
   </div>
   <Footer/>
  </>
  )
}

//esse código esta sujo, poderia mudar ele com a extenção de react router para dar uma limpadinha, ja que ele ta mudando a pagina toda, mesmo que algumas coisas continuem as mesmas, porem eh funcional, se esta encomodado vc que mude

export default App;
