import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Bem vindo!</title>
    </Head>
    <h1>Bem vindo!</h1>
    <Link href="users">
      <a> Acessar listagem dos membros da Rocketseat</a>
    </Link>
  </div>
);

export default Home;
