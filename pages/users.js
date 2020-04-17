import React from "react";
import Link from "next/link";
import Head from "next/head";

import api from "../config/api";

const Users = ({ users }) => (
  <div>
    <Head>
      <title>Listagem dos membros da Rocketseat</title>
    </Head>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`users/${user.login}`}>
            <a>
              <abbr title="Acessar perfil">{user.login}</abbr>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="users">
      <a>Voltar</a>
    </Link>
  </div>
);

Users.getInitialProps = async () => {
  const response = await api.get("/orgs/rocketseat/members");

  return { users: response.data };
};

export default Users;
