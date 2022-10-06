import React from 'react';

class Formulario extends React.Component{ 
 render(){
   const styles = {
    width: '379px',
    height: '60px',
    borderRadius: '50px',
    textAlign: 'center',
   }
  return (
  <form action="">
    <div>
      <label htmlFor="usuario">
      </label>
      <input 
      style = {styles}
      type="text"
      name="campoEmail"
      placeholder = "Usuário"
      id="email"
      required 
      />
    </div>
    
    <div>
      <label htmlFor="senha">
      </label>
      <input
      style = {styles} 
      type="password"
      name="campoSenha"
      placeholder="Senha"
      id="senha"
      required
      />
    </div>
  </form>
    );
  }
}
export default Formulario;