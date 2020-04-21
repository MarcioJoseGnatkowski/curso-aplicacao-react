import React, { useState } from 'react';
import './App.css';
/*importando componente que criei*/
import Logo from './Logo'
import Text from './Text'
import Link from './Link'
import Header from './Header'
import BoasVindas from './BoasVindas'
import Buttons from './Buttons'
 
/*Utilizando componente, <Text /> sempre letra maiuscula, tag é minuscula*/
const App = () => {
  const [repeticao, setRepeticao] = useState(1);
  return (
    <div className="App">
      <Header>
        <Logo repeticao={repeticao} /> 
        <Buttons repeticao={repeticao} setRepeticao={setRepeticao} />      
        <Text />
        <Link />
        <BoasVindas nome="Marcio Jose Gnatkowski" />
      </Header>
    </div>
  );
};

export default App;