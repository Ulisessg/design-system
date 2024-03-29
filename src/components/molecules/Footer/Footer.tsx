import React, { forwardRef } from "react"
import styled from "styled-components"

import Link from "../../atoms/Link/Link"

export default forwardRef<HTMLElement, FooterProps>(function Footer (props, ref) {
  const hackerEthicsBook =
    "https://archive.org/details/la-etica-hacker/mode/2up"
  return (
    <FooterStyles ref={ref}>
      {props.children}
      <Link
        href={hackerEthicsBook}
        text="Continúa Hackeando 🤖"
        target="_blank"
        version="darker"
        title="La ética del hacker - PDF"
      />
      <p>Hecho con amor, café y amor al café ☕</p>
    </FooterStyles>
  )
})

export interface FooterProps extends ComponentProps<'footer'> {
}

const FooterStyles = styled.footer`
  display: grid;
  width: 100vw;
  padding: ${({theme}) => theme.spacing  * 4}px;
  justify-content: center;
  text-align: center;
  margin-top: ${({theme}) => theme.spacing  * 3}px;
  box-shadow: 0px -5px 8px 1px ${({ theme }) => theme.colors.shadow};
  min-height: ${({theme}) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.light3};
  align-content: space-around;
  & a {
    font-size: 30px;
    margin-bottom: ${({theme}) => theme.spacing}px;
  }
`
