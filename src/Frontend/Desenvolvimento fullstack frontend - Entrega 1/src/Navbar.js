import Logo from './images/Logo.png';
export default function Navbar (){
    return(
    <nav className = "nav">
        < a href = "/" className = "Titulo"> 
      <img src={Logo} alt ="Logo" className = "Logo"/>
         </a>
        <ul>
        <CustomLink href="/sobre"> Sobre Nós </CustomLink>
        <CustomLink href="/doacoes"> Doações </CustomLink>
        <CustomLink href="/cursos"> Cursos </CustomLink>
        <CustomLink href="/historias"> Historias </CustomLink>
        </ul>
        < a href = "/cadastro" className = "Cadastro"> Cadastro </a>
        < a href = "/login" className = "Login"> Login </a>
        < a href = "/donate" className = "Donate"> Donate </a>
    </nav>
    )
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