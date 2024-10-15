import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const GeneralContainer = styled.div`
    max-height: 50em;
    background-color: blue;
`;

const ContinentsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const America = styled.div`
    background-color: #000;
    width: 30%; /* Ajuste a largura */
    height: 200px; /* Ajuste a altura */
    color: white; /* Texto branco para contraste */
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Africa = styled.div`
    background-color: #a1a1a1;
    width: 30%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Asia = styled.div`
    background-color: #c2c2c2;
    width: 30%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Map() {
    return (
        <GeneralContainer>
            <ContinentsContainer>
                <America>América</America>
                <Africa>África</Africa>
                <Asia>Ásia</Asia>
            </ContinentsContainer>
        </GeneralContainer>
    );
}

export default Map;


