import React from "react";

import "~/styles/global.css";

import { Container } from "~/styles/styles";

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
