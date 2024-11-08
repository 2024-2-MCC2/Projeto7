import React from 'react'
import styled from 'styled-components'
import BoxContent from './ComponentsCadastro/BoxContentCadastro'

const StyleTitulo = styled.h2`
color: black;
font-size: 30px;
font-weight: bold;
font-family: Georgia, 'Times New Roman', Times, serif;
padding-left: 30px;
margin-top: 50px;
`


function MainContainerCadastro(){
    return(
     <div className="main-content">
        <StyleTitulo>Cadastro</StyleTitulo>
        <BoxContent/>
     </div>
    )
}
export default MainContainerCadastro