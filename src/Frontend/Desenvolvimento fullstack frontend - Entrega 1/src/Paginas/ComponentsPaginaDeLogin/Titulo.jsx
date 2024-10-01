import React from 'react';
import styled from 'styled-components'

const StyleTitulo = styled.h2`
font-family: Georgia;
padding-left: 31px;
margin-top: 50px;
color: #000000;

` 


function Titulo(){
    return(
        <>
        <StyleTitulo>Login</StyleTitulo>
        </>
    )
}
export default Titulo;