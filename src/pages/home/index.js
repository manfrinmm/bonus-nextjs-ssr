import React from "react";
import Link from "next/link";
import Head from "next/head";

import { Container } from "./styles";

const Home = () => (
  <Container>
    <Head>
      <title>Bem vindo!</title>
    </Head>
    <h1>Bem vindo!</h1>
    <Link href="users">
      <a>Acessar listagem dos membros da Rocketseat</a>
    </Link>
  </Container>
);

export default Home;
