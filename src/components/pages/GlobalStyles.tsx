import React, { ReactNode } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

const theme: DefaultTheme = {
  colors: {
    dark1: "#100720",
    dark2: "#0C4B8E",
    dark3: "#787878",
    light1: "#d3d3d3eb",
    light2: "#189BFA",
    light3: "#5ACFD6",
  },
};

export default function GlobalStyles({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
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
  }
  #__next {
    display: grid;
    justify-content: center;
    width: 100vw;
  }
  html {
    background-color: #fff;
  }
`;
