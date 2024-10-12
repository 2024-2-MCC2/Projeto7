import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './ComponentsGerais/Header.js';
import SobreNos from './Pages/Templates/SobreNos.js';
import Home from './Pages/Home/Home.js';
import Historias from './Pages/Templates/Historias.js';
import Cadastro from './Pages/Cadastro/Cadastro.jsx';
import Login from './Pages/Login/Login.jsx';
import Donate from './Pages/Donate/Donate.js';
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