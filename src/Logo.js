/*
  Componente Logo
*/

import React from 'react';
import logo from './logo.svg';
import './Logo.css';
 
const Logo = (props) => {
  const array_imagens = [];

  for (let i = 0; i < props.pepeticao && i < 6; i++) {
    array_imagens.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }
  
  return (
    <div className="App-logo-container">
      {array_imagens}
    </div>
  );
};

//definido default de 1 caso não seja passado com parâmetro nenhum valor
Logo.defaultProps = {
  pepeticao: 1
}

export default Logo;