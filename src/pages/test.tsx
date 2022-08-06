import React from "react";
import type { NextPage } from "next";
import GlobalStyles from "../components/pages/GlobalStyles";

const Test: NextPage = () => {
  if (process.env.NODE_ENV === "production") return <p>Test</p>;

  return (
    <GlobalStyles>
      <p>Test</p>
    </GlobalStyles>
  );
};

export default Test;
