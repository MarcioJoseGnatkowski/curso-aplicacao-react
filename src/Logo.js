/*
  Componente Logo
*/
import React, { useEffect } from 'react';
import logo from './logo.png';
import './Logo.css';
 

const Logo = ({ repeticao }) => {
  
  useEffect(() => {
    console.log('Repeticao de alteracao');
  }, [repeticao]);

  const array_imagens = [];

  for (let i = 0; i < repeticao; i++) {
    array_imagens.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }
  
  //essa div App-logo-container é para deixar imagem lado  a lado.
  return (
    <div className="App-logo-container">
      {array_imagens}
    </div>
  );
};

export default Logo;