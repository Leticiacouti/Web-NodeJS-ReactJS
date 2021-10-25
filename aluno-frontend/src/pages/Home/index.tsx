import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Cadastro de Alunos</h1>
          <p className="lead">
            Sistema para matricular, editar cadastro, desmatricular aluno e excluir cadastro.
          </p>
          <hr />
          <p>
            Esta aplicação consiste em um CRUD de um sistema de cadastro de alunos
            fornecido por um backend construído com NodeJS e um frontend
            construído em ReactJS.
          </p>
          <p>Desenvolvido por: <a href="https://github.com/Leticiacouti" target="_blank" rel="noopener noreferrer">Letícia Coutinho</a></p>
          <Link className="btn btn-primary btn-lg" to="/cadastros">
            Acessar Cadastros
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;