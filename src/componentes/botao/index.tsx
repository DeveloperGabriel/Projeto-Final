import React from 'react';

class Botao extends React.Component{
  render(){
    const backgroundColor = '#FF2D04';
    const color = 'white';
    const styles = {
     backgroundColor,
     color,
     width: '379px',
     height: '67px',
     borderRadius: '50px',
  }
    return(
      <div className="Botao">
        <button style={styles}>
          Continuar
        </button>      
      </div>
    );
  }
}
export default Botao;