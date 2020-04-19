import React from "react";
import Link from "next/link";
import Head from "next/head";

import api from "~/config/api";

import { Container, Content } from "./styles";

const Users = ({ users }) => (
  <Container>
    <Head>
      <title>Listagem dos membros da Rocketseat</title>
    </Head>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Content>
            <Link href={`users/${user.login}`}>
              <a>
                <abbr title="Acessar perfil">
                  <img src={user.avatar_url} />
                  {user.login}
                </abbr>
              </a>
            </Link>
          </Content>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </Container>
);

Users.getInitialProps = async () => {
  const response = await api.get("/orgs/rocketseat/members");

  return { users: response.data };
};

export default Users;
