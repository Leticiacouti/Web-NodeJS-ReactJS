import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Letícia Coutinho da Silva',
      dados: 'leticianejor@gmail.com | (13)996116808 | Praia Grande - SP',
      formacao: 'Cursando Ciência da Computação na instituição UNIP, cursei ensino médio técnico em informática e conclui curso de inglês',
      exp: 'Conhecimento em C#, JAVA, PYTHON, NodeJS, ReactJS, HTML, CSS, Javascript e Banco de Dados',
      projeto: 'Todos meus projetos atuais estão no GitHub "Leticiacouti"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;