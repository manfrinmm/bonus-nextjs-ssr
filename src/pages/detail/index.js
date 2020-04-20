import React from "react";
import Link from "next/link";
import Head from "next/head";

import api from "~/config/api";

import { Container, Content, ReposContainer, Repo } from "./styles";

const Detail = ({ user, repos }) => (
  <Container>
    <Head>
      <title>Detalhes do {user.name}</title>
    </Head>
    <h1>{user.name}</h1>
    <Content>
      <header className="profile">
        <img src={user.avatar_url} alt={user.name} />
        <Link href="/users">
          <a>Voltar</a>
        </Link>
      </header>

      <div>
        <div className="infos">
          <p>
            Followers <strong>{user.followers}</strong>
          </p>
          <p>
            Following <strong>{user.following}</strong>
          </p>
          <p>
            Public repositories <strong>{user.public_repos}</strong>
          </p>
        </div>

        <hr />

        <p className="bio">{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          Go to Github
        </a>
        <ReposContainer>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <Repo>
                  <p>{repo.name}</p>
                  <p>{repo.description}</p>
                  <a href={repo.html_url} target="_blank">
                    Acessar repositório.
                  </a>
                </Repo>
              </li>
            ))}
          </ul>
        </ReposContainer>
      </div>
    </Content>
  </Container>
);

Detail.getInitialProps = async ({ query }) => {
  const userResponse = await api.get(`/users/${query.username}`);

  const reposResponse = await api.get(`/users/${query.username}/repos`);

  return { user: userResponse.data, repos: reposResponse.data };
};

export default Detail;
