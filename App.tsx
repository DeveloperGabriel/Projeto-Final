import React from 'react';
import Formulario from "./src/componentes/formulario/index";
import Botao from "./src/componentes/botao/index";

export default function App() {
  return (
    <div className="App">
      <h1>Olá</h1>    
      <p>Para continuar navegando de forma</p>
      <p>segura, efetue o login na rede.</p>
      <h2>Login</h2>
      <Formulario/>
      <Botao/>
    </div> 
  );
}