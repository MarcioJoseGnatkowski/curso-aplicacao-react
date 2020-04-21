import React from 'react';

//Aqui no componete Header o props receb como parâmetro esses três componente  <Logo />  <Text /> <Link />

//props.children é tudo que vem dentro da abertura e chamada do componente por ex: <Logo /> 
const Header = (props) => (
  <header className="App-header">
    {props.children}        
  </header>
);

export default Header;