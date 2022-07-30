import React from "react";
import type { NextPage } from "next";
import GlobalStyles from "../components/pages/GlobalStyles";
import Button from "../components/atoms/Button";

const Test: NextPage = () => {
  if (process.env.NODE_ENV === "production") return <p>Test</p>;

  return (
    <GlobalStyles>
      <Button type="button" data-a="12" text="Click" size="large" />
    </GlobalStyles>
  );
};

export default Test;
