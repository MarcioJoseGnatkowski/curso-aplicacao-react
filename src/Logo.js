/*
  Componente Logo
*/
import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './Logo.css';
 

const Logo = () => {
  const [repeticao, setRepeticao] = useState(1);

  //Inicializa o componente com 1, o [] diz que sera executado somente uma vez 
  useEffect(() => {
    setRepeticao(1);
  }, []);
  
  useEffect(() => {
    console.log('Repeticao de alteracao');
  }, [repeticao]);
  
  	
  const [numeroCliquesBotoesMais, setNumeroCliquesBotoesMais] = useState(0);
  const [numeroCliquesBotoesMenos, setNumeroCliquesBotoesMenos] = useState(0);

  //funções para pegar click , para o código não fique grande no button
  const handleClickPlus = () => {
    setRepeticao((repeticao) => repeticao + 1);
    setNumeroCliquesBotoesMais((count) => count + 1);
  }
      
  const handleClickMinus = () => {
    setRepeticao((repeticao) => repeticao - 1);
    setNumeroCliquesBotoesMenos((count) => count + 1);
  }

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
        <button disabled={repeticao === 6} onClick={handleClickPlus}>
          Logo +
        </button>
        <button disabled={repeticao === 1} onClick={handleClickMinus}>
          Logo -
        </button>
      </div>
      <div>
        <p><b>Logo +</b> O botao foi clicado {numeroCliquesBotoesMais} vezes</p>
        <p><b>Logo -</b> O botao foi clicado {numeroCliquesBotoesMenos} vezes</p>
      </div>
    </>
  );
};

export default Logo;