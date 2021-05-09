import React, { useState } from "react";
import "../styles/geral.css";
import "../styles/repositories.css";
import RepositoryList from "./RepositoriesList";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [user, setUSer] = useState("");

  function searchUsers() {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
    console.log(repositories);
  }

  return (
    <div className="header">
      <h1>GithubInfos</h1>
      <section className="search">
        <input
          type="text"
          placeholder="Nome de um usuário"
          onChange={(e) => setUSer(e.target.value)}
          value={user}
        />
        <button type="submit" onClick={searchUsers}>
          Pesquisar
        </button>
      </section>
      <section className="repositories">
        {repositories.map((repository) => {
          return <RepositoryList key={repository.id} repository={repository} />;
        })}
      </section>
    </div>
  );
};

export default Repositories;
