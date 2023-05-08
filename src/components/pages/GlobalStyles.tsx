import React, { ReactNode } from "react"
import {
  createGlobalStyle,
  ThemeProvider,
} from "styled-components"
import Footer from "../molecules/Footer"
import theme from '../theme'

export default function GlobalStyles ({
  children,
  footer = true,
  header
}: GlobalStylesProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {header}
      <main role="main">{children}</main>
      {footer && <Footer />}
    </ThemeProvider>
  )
}

const Global = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Helvetica";
  };
  #__next {
    overflow-x: hidden;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    justify-items: center;
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
`

export type GlobalStylesProps = {
  footer?: boolean
  children: ReactNode
  header?: ReactNode
}
