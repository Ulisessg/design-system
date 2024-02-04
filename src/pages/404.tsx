import React from "react";
import { NextPage } from 'next'
import { Container } from "../components/pages/404Styles";
import Link from "../components/atoms/Link/Link";
import styled from "styled-components"
import { cheemsAscii } from '../utils/ascii'


const NotFound: NextPage = () => {
  return (
    <>
        <Container>
          {/* <Image src={cheems as unknown as string} alt="Cheems" width={350} /> */}
          <h1>Página no emcontrada</h1>
          <CheemsStyle aria-label="Cheems in ASCII art">{cheemsAscii}</CheemsStyle>
          <Link href="/" text="Regresar a la página principal" />
        </Container>
    </>
  );
};

export const CheemsStyle = styled.pre`
 font-size: 5px;
`

export default NotFound;
