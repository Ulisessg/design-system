import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyles from "../components/pages/GlobalStyles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notflix</title>
        <meta name="description" content="Notflix" />
      </Head>
      <GlobalStyles>
        <main>
          <h1>Notflix 🏴‍☠️</h1>
        </main>
        <footer>
          <p>Hecho con amor, café y amor al café ☕</p>
        </footer>
      </GlobalStyles>
    </>
  );
};

export default Home;
