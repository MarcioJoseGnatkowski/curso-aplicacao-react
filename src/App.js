import React from 'react';
import './App.css';
/*importando componente que criei*/
import Logo from './Logo'
import Text from './Text'
import Link from './Link'
import Header from './Header'
import BoasVindas from './BoasVindas'
 
/*Utilizando componente, <Text /> sempre letra maiuscula, tag é minuscula*/
const App = () => (
    <div className="App">
      <Header>
        <Logo />        
        <Text />
        <Link />
        <BoasVindas nome="Marcio Jose Gnatkowski" />
      </Header>
    </div>
);

export default App;