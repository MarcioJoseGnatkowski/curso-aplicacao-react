/*
  Componente Logo
*/
import React, { useState } from 'react';
import logo from './logo.png';
import './Logo.css';
 
const Logo = () => {
  const [repeticao, setRepeticao] = useState(1);

  const array_imagens = [];

  for (let i = 0; i < repeticao; i++) {
    array_imagens.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }
  
  //essa div App-logo-container é para deixar imagem lado  a lado.
  return (
    <>
      <div className="App-logo-container">
        {array_imagens}
      </div>
      <div className="App-logo-buttons">
        <button disabled={repeticao === 6} onClick={() => setRepeticao((repeticao) => repeticao + 1)}>
          Logo +
        </button>
        <button disabled={repeticao === 1} onClick={() => setRepeticao((repeticao) => repeticao - 1)}>
          Logo -
        </button>
      </div>
    </>
  );
};

export default Logo;