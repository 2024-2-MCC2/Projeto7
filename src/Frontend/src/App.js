import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './ComponentsGerais/Header.js';
import SobreNos from './Pages/Templates/SobreNos.js';
import Home from './Pages/Home/Home.js';
import Historias from './Pages/Templates/Historias.js';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Login from './Pages/Login/Login.jsx';
import Donate from './Pages/Donate/Donate.js';
import OndeTrabalhamos from './Pages/OndeTrabalhamos/OndeTrabalhamos.jsx';
import NossoTrabalho from './Pages/Templates/NossoTrabalho.jsx'
import TomeAcao from './Pages/Templates/TomeAcao.jsx'
import SaibaMais from './Pages/Templates/SaibaMais.jsx'
import Footer from './ComponentsGerais/Footer.js';


function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre-nos" element={<SobreNos/>}/>
      <Route path="/historias" element={<Historias/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nossotrabalho" element={<NossoTrabalho/>}/>
      <Route path="/tome-acao" element={<TomeAcao/>}/>
      <Route path="/ondetrabalhamos" element={<OndeTrabalhamos/>}/>
      <Route path="/saibamais" element={<SaibaMais/>}/>
      <Route path="/donate" element={<Donate/>}/>
      {/* <Route path="/tomeacao" element={<TomeAcao/>}/>
      <Route path="/nosso" element={<NossoTrab/>}/> */}
    </Routes>
    {/* <Home/> */}
    <Footer/>
  </Router>
  )
}


export default App;