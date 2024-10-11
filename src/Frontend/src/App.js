
import Navbar from './ComponentsGerais/Header.js';

//import Noticias from './Paginas/Noticias';
import SobreNos from './Pages/Templates/SobreNos.js';
import Home from './Pages/Home/Home.js';
import Historias from './Pages/Templates/Historias.js';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Login from './Pages/Login/Login.jsx';
import Donate from './Pages/Donate/Donate.js';

import Footer from './ComponentsGerais/Footer.js';

function App() {
  let Component
  switch (window.location.pathname){ //isso faz com que la no nome da Página mude de nome
    case "/":
      Component = <Home/> 
    break;

      case "/sobre":
        Component = <SobreNos/>
        break;

        // case "/cursos":
        //   Component = <Noticias/> 
        //   break;

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