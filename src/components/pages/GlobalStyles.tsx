import isPropValid from '@emotion/is-prop-valid'
import React, { ReactNode } from "react"
import {
  createGlobalStyle,
  ThemeProvider,
  StyleSheetManager
} from "styled-components"
import Footer from "../molecules/Footer"
import theme from '../theme'

export default function GlobalStyles ({
  children,
  footer = true,
  header
}: GlobalStylesProps) {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <Global />
        {header}
        <main role="main">{children}</main>
        {footer && <Footer />}
      </ThemeProvider>
    </StyleSheetManager>
  )
}

function shouldForwardProp(propName: string, target: any) {
  if (typeof target === "string") {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

const Global = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Helvetica";
  };
  body {
    padding: 0 !important;
    margin: 0 !important;
  }
  #__next, #storybook-root {
    overflow-x: hidden;
    min-height: 100vh;
    display: grid;
    justify-items: center;
  };
  main {
    display: grid;
    justify-items: center;
    width: 90%;
    align-content: space-around;
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
