import React from "react";
import Link from "next/link";
import Head from "next/head";

import api from "../config/api";

const Detail = ({ user }) => (
  <div>
    <Head>
      <title>Detalhes do {user.login}</title>
    </Head>
    <h1>{user.login}</h1>
    <img src={user.avatar_url} alt={user.login} />

    <Link href="/users">
      <a>Voltar</a>
    </Link>
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const response = await api.get(`/users/${query.username}`);

  return { user: response.data };
};

export default Detail;
