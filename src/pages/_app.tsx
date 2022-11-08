import React from "react";
import type { AppProps } from "next/app";
import GlobalStyles from "../components/pages/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <GlobalStyles>
  <Component {...pageProps} />;
  </GlobalStyles>
  </>
}

export default MyApp;
