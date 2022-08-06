import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyles from "../components/pages/GlobalStyles";
import Link from "../components/atoms/Link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notflix</title>
        <meta name="description" content="Notflix" />
      </Head>
      <GlobalStyles>
        <h1>Design System 🏴‍☠️</h1>
        <Link text="Go Test" href="/test" />
        <Link text="Go 404" href="/404" />
      </GlobalStyles>
    </>
  );
};

export default Home;
