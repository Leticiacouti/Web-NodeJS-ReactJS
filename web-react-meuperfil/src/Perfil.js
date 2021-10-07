import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://i.pinimg.com/564x/4b/48/ae/4b48ae0f50da5777b14de949684dd4a7.jpg';

      return (
        <img src={img} width={200} height={200} />
      );
    }
  }

  export default Perfil;