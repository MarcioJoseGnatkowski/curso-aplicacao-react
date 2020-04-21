/*
  Componente Buttons
*/
import React, { useState } from 'react';
import './Buttons.css';
 

const Buttons = ({ repeticao, setRepeticao }) => {

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
  
  //essa div App-logo-container é para deixar imagem lado  a lado.
  return (
    <>
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

export default Buttons;