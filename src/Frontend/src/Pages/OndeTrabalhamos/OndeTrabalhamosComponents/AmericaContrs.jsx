import React from "react";
import styled from 'styled-components';

const ContainerSumario = styled.div`
background-color: #d1ffce;
border: 2px solid black;
`

const TxtSumario = styled.p`
color: white;
background-color: green;

`

const CaribeContainer = styled.div`
    background-color: black;
`
const ImageCaribeContainer = styled.div`
    
`
const ImageCaribe = styled.img`
    
`
const TextContainerCaribe = styled.div`
    
`
const TitleCaribe = styled.h1`
    
`
const TextCaribe = styled.p`
    
`

function AmericaContrs() {
    return (
        <>
            <ContainerSumario>
                <TxtSumario>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum quasi ipsum provident accusantium praesentium iusto veniam sed accusamus. Enim error commodi atque porro numquam? Ducimus recusandae repellat maiores possimus.</TxtSumario>
            </ContainerSumario>
            <CaribeContainer/>
        </>
    )
}

export default AmericaContrs;