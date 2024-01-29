import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "../components/atoms/Link/Link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Design system</title>
        <meta name="description" content="Design system" />
      </Head>
        <h1>Design System 🏴‍☠️</h1>
        <Link text="Go Test" href="/test" />
        <Link text="Go 404" href="/404" />
    </>
  );
};

export default Home;
