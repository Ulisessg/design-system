import React from "react";
import type { NextPage } from "next";
import GlobalStyles from "../components/pages/GlobalStyles";
import Link from "../components/atoms/Link";

const Test: NextPage = () => {
  if (process.env.NODE_ENV === "production") return <p>Test</p>;

  return (
    <GlobalStyles>
      <Link href="/" text="Go home" />
    </GlobalStyles>
  );
};

export default Test;
