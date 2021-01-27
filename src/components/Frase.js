import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    background-color: #fff;
    border-radius: .5rem;
    margin: 0 1rem;
    max-width: 800px;
    padding: 3rem;

    @media(min-width:992px){
        margin-top: 10rem
    }

    h1 {
        font-family: Geneva, Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        padding-left: 4rem;
        position: relative;        
        text-align: center;

        &::before {
            color: black;
            content: open-quote;
            font-size: 8rem;
            left: -1rem;
            position: absolute;
            top: -2rem
        }
    }

    p {
        color: #666;
        font-family: Geneva, Tahoma, sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 2rem;
        text-align: right        
    }
`;

const Frase = ({ frase }) => {

    if( Object.keys(frase).length === 0 ) return null;

    return (
        <ContenedorFrase>
            <h1>{ frase.quote }</h1>
            <p>{ frase.author }</p>
        </ContenedorFrase>
    );
}
 
export default Frase;