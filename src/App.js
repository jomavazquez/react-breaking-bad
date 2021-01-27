import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  border: solid 2px black;
  border-radius: .5rem;
  color: #fff;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  margin: 3rem 0;
  padding: 2rem;
  transition: all .8s ease;

  :hover {
    background-size: 400px;
    cursor: pointer    
  }
`;

const Contenedor = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  padding-top: 5rem
`;

const App = () => {

  const [ frase, guardarFrase ] = useState({});

  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async() => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
  
    guardarFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase frase={ frase } />
      <Boton onClick={ consultarAPI }>
        Get a quote
      </Boton>
    </Contenedor>
  )
}

export default App;