import React from "react";
import type { NextPage } from "next";
import GlobalStyles from "../components/pages/GlobalStyles";
import Footer from "../components/molecules/Footer";

const Test: NextPage = () => {
  if (process.env.NODE_ENV === "production") return <p>Test</p>;

  return (
    <GlobalStyles>
      <Footer />
    </GlobalStyles>
  );
};

export default Test;
