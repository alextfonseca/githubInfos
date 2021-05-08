import React from "react";
import "../styles/repositoriesList.css";

const RepositoryList = (props) => {
  const repositoryUser = `https://github.com/${props.repository.owner.login}/${props.repository.name}`;

  return (
    <div className="card">
      <h1>{props.repository.name}</h1>
      <p>{props.repository.description}</p>
      <div className="infosUser">
        <p>{props.repository.owner.login}</p>
        <img src={props.repository.owner.avatar_url} alt="Imagem do usuário" />
      </div>
      <a href={repositoryUser}>Acessar o projeto</a>
    </div>
  );
};

export default RepositoryList;
