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
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const BtnContainer = styled.div`
position: absolute;
display: flex;
justify-content: space-between;
text-align: center;
/* border: 2px solid white; */
gap: 570px;
`

const America = styled.img`
    margin: 30px;
    width: 85%; 
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

    &:hover{
        cursor: pointer;
        transition: 0.2s ease-in-out;
        color: #6acf61;
    }

    a{
  color: #FFF;
  text-decoration: none;
}
`
const AfricaBtn = styled(AmericaBtn)``;
const AsiaBtn = styled(AmericaBtn)``;

const AmericaContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AfricaContainer = styled(AmericaContainer)``;
const AsiaContainer = styled(AmericaContainer)``;



function Map() {
    return (
        <GeneralContainer>
            <ContinentsContainer>
                <AmericaContainer>
                    <America src={fotocaribe} alt='foto caribe' />
                    <BtnContainer>
                        <AmericaBtn>
                            <Link to='americacontrs'>América</Link>
                        </AmericaBtn>
                    </BtnContainer>
                </AmericaContainer>
                <AfricaContainer>
                    <Africa src={fotosomalia} alt='foto somalia' />
                    <BtnContainer>
                        <AfricaBtn>
                            <Link>África</Link>
                        </AfricaBtn>
                    </BtnContainer>
                </AfricaContainer>
                <AsiaContainer>
                    <Asia src={fotopaquistao} alt='foto paquistão' />
                    <BtnContainer>
                        <AsiaBtn>
                            <Link>Asia</Link>
                        </AsiaBtn>
                    </BtnContainer>
                </AsiaContainer>
            </ContinentsContainer>
        </GeneralContainer>
    );
}

export default Map;


