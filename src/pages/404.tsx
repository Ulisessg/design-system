import React from "react";
import { NextPage } from "next";
import GlobalStyles from "../components/pages/GlobalStyles";
import { Container } from "../components/pages/404Styles";
import Link from "../components/atoms/Link";

const NotFound: NextPage = () => {
  return (
    <>
      <GlobalStyles>
        <Container>
          <img src="/Cheems.png" alt="Cheems" width="350px" />
          <h1>Página no emcontrada</h1>
          <Link href="/" text="Regresar a la página principal" />
        </Container>
      </GlobalStyles>
    </>
  );
};

export default NotFound;
