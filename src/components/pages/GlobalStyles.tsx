import React, { ReactNode } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import Footer from "../molecules/Footer";

const theme: DefaultTheme = {
  colors: {
    dark1: "#100720",
    dark2: "#0C4B8E",
    dark3: "#787878",
    shadow: "#e4e4e4",
    light1: "#d3d3d3eb",
    light2: "#189BFA",
    light3: "#5ACFD6",
    error: "#ff0e1a",
    warning: "#EAE509",
  },
};

export default function GlobalStyles({
  children,
  footer = true,
}: GlobalStylesProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <main role="main">{children}</main>
      {footer && <Footer />}
    </ThemeProvider>
  );
}

const Global = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Roboto", Arial, sans-serif;
  };
  #__next {
    overflow-x: hidden;
    min-height: 100vh;
    display: grid;
  };
  main {
    display: grid;
    justify-content: center;
    justify-items: center;
    width: 100vw;
    align-content: space-between;
  };
  html {
    background-color: #fff;
  };
`;

type GlobalStylesProps = {
  footer?: boolean;
  children: ReactNode;
};
