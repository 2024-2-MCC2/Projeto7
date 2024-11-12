import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ComponentsGerais/Header.js';
import SobreNos from './Pages/Templates/SobreNos.js';
import Home from './Pages/Home/Home.js';
import Historias from './Pages/Templates/Historias.js';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Login from './Pages/Login/Login.jsx';
import Donate from './Pages/Donate/Donate.js';
import OndeTrabalhamos from './Pages/OndeTrabalhamos/OndeTrabalhamos.jsx';
import NossoTrabalho from './Pages/NossoTrabalho/NossoTrabalho.jsx';
import TomeAcao from './Pages/TomeAcao/TomeAcao.jsx'
import SaibaMais from './Pages/Templates/SaibaMais.jsx'
import AmericaContrs from './Pages/OndeTrabalhamos/OndeTrabalhamosComponents/AmericaContrs.jsx';
import AfricaContrs from './Pages/OndeTrabalhamos/OndeTrabalhamosComponents/AfricaContrs.jsx';
import AsiaContrs from './Pages/OndeTrabalhamos/OndeTrabalhamosComponents/AsiaContrs.jsx';
import Footer from './ComponentsGerais/Footer.js';
import Contato from './Pages/Contato/Contato.js';
import DesastresExplicados from './Pages/desastres/DesastresExplicados.jsx';
import GlobalStyles from './createGlobalStyle.js';
import Time from './Pages/Templates/Time.js';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nossotrabalho" element={<NossoTrabalho />} />
        <Route path="/tome-acao" element={<TomeAcao />} />
        <Route path="/desastres" element={<DesastresExplicados />} />
        <Route path="/ondetrabalhamos" element={<OndeTrabalhamos />} />
        <Route path="/saibamais" element={<SaibaMais />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="ondetrabalhamos/america" element={<AmericaContrs />} />
        <Route path="ondetrabalhamos/africa" element={<AfricaContrs />} />
        <Route path="ondetrabalhamos/asia" element={<AsiaContrs />} />
        <Route path='/timedosite' element={<Time/>}/>
        {/* <Route path="/tomeacao" element={<TomeAcao/>}/>
      <Route path="/nosso" element={<NossoTrab/>}/> */}
      </Routes>
      {/* <Home/> */}
      <Footer />
    </Router>
  )
}


export default App;
