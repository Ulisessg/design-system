import React from "react";

import type { NextPage } from "next";

const Test: NextPage = () => {
  if (process.env.NODE_ENV === "production") return <p>Test</p>;

  return <div>Testing development</div>;
};

export default Test;
