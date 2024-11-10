import React from 'react';
import styled from 'styled-components'
import Header from '../../ComponentsGerais/Header.js'
import Footer from '../../ComponentsGerais/Footer'
import BoxContentLogin from './ComponentsLogin/BoxContentLogin'

const StyleTitulo = styled.h2`
color: black;
font-size: 30px;
font-weight: bold;
font-family: Georgia, 'Times New Roman', Times, serif;
padding-left: 30px;
margin-top: 50px;
` 


function MainContainerLogin(){
    return(
        <>
        <StyleTitulo>Login</StyleTitulo>
        <BoxContentLogin/>
        </>
    )
}
export default MainContainerLogin;