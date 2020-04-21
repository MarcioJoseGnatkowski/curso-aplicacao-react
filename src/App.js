import React from 'react';
import './App.css';
/*importando componente que criei*/
import Logo from './Logo'
import Text from './Text'
import Link from './Link'
 
/*Utilizando componente, <Text /> sempre letra maiuscula, tag é minuscula*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />        
        <Text />
        <Link />
      </header>
    </div>
  );
}
 
export default App;