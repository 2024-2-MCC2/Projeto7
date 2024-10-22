import React from "react";
import styled from "styled-components";
import fotocaribe from '../../../assets/img/fotocaribe.png'
import fotosomalia from '../../../assets/img/fotosomalia.png'
import fotopaquistao from '../../../assets/img/fotopaquistao.png'
import { Link } from 'react-router-dom';


const GeneralContainer = styled.div`
    max-height: 50em;
    background-color: #dff6f0;
`;

const ContinentsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const BtnContainer = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
gap: 570px;
`

const America = styled.img`
    margin: 30px;
    width: 30%; 
    height: 400px; 
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    filter: brightness(0.3);
    transition: 0.2s all ease-in-out;

    &:hover{
        filter: brightness(0.6);
    }
`;

const Africa = styled(America)``; 
const Asia = styled(America)``;

const AmericaBtn = styled.button`
    /* position: absolute; */
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 40px;
    font-weight: bold;
    background-color: transparent;
    border: none;
`
const AfricaBtn = styled(AmericaBtn)``; 
const AsiaBtn = styled(AmericaBtn)``;

function Map() {
    return (
        <GeneralContainer>
            <ContinentsContainer>
                <America src={fotocaribe} alt='foto caribe'/>
                <Africa src={fotosomalia} alt='foto somalia'/>
                <Asia src={fotopaquistao} alt='foto paquistão'/>
            <BtnContainer>
                <AmericaBtn>America</AmericaBtn>
                <AfricaBtn>Africa</AfricaBtn>
                <AsiaBtn>Asia</AsiaBtn>
            </BtnContainer>
            </ContinentsContainer>
        </GeneralContainer>
    );
}

export default Map;


