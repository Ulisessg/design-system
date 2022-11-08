import React from "react";
import { NextPage } from 'next'
import { Container } from "../components/pages/404Styles";
import Link from "../components/atoms/Link";
import styled from "styled-components"

const src = `⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣳⠦⢖⣒⢲⣲⡦⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡴⢻⣦⡲⠤⡀⠹⡋⢷⡇⣿⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢼⢠⣿⡟⠃⢀⣠⡄⠱⠀⣿⣿⠛⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠠⣿⣿⣛⡀⠚⠟⠛⠁⠀⠀⠙⠈⣧⣰⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣾⣿⡟⠏⠀⠀⠀⠀⠀⠀⡀⠀⣸⡟⢃⠼⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⣿⡿⢆⣀⢠⡶⠀⠀⠀⣠⠆⠐⠁⠀⠃⢀⣼⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠛⠳⡾⡾⠛⠀⠀⠀⡎⠁⠀⠀⠀⡀⠀⠈⠁⠀⠳⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⢣⡀⠀⣠⠖⠁⠀⠀⠀⠀⢠⡟⢦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠈⠣⠊⠁⠀⠀⠀⠀⠀⢠⠟⠇⢀⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡾⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠴⠀⠃⠀⠀⠀⢼⡏⠘⢇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣇⡀⠀⠀⠀⠀⠀⢀⠤⠒⠁⠀⢀⡄⠀⠀⠀⢰⠊⠀⠀⣾⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⡿⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⡾⠂⠀⠀⠘⠉⠀⠀⣴⢻⢷⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢿⠬⠑⠤⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⢀⠀⠀⠐⠃⢘⣿⣷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀⡘⠁⡀⠀⠀⠀⢠⡟⠀⠀⠀⠟⣈⣻⣿⡇
⠀⠀⠀⠀⠀⠀⠀⠀⣻⡇⠀⠀⣸⡁⠀⠀⠀⢷⣸⠀⠀⠀⠀⣯⠀⣄⣫⣤⣺⣿⣿⡿⠀
⠀⠀⠀⠀⠀⣀⠤⠚⣹⡂⠀⢰⣿⣿⣦⠤⠤⠾⡟⠀⠀⠀⣼⣿⣧⣿⣿⣿⣿⣿⠟⠁⠀
⢀⣠⠒⠋⠉⢁⣠⠴⣻⠁⢠⣼⠛⠁⠀⠀⠀⠀⣷⠀⠀⢠⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀
⠈⠛⠛⠒⠉⠉⣀⢤⠃⢀⣿⠷⠴⠤⣄⣀⡀⠀⡿⠀⢀⣾⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀
⠀⠀⣠⠤⠒⠉⡠⠃⠀⢨⠏⠀⠀⠀⠀⠀⠉⠉⡇⠀⢸⡟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠛⠧⣶⠟⢠⠀⣠⠋⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠿⢴⡷⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡄⢀⡀⢸⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣇⣸⡥⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
const NotFound: NextPage = () => {
  return (
    <>
        <Container>
          {/* <Image src={cheems as unknown as string} alt="Cheems" width={350} /> */}
          <h1>Página no emcontrada</h1>
          <CheemsStyle aria-label="Cheems in ASCII art">{src}</CheemsStyle>
          <Link href="/" text="Regresar a la página principal" />
        </Container>
    </>
  );
};

const CheemsStyle = styled.pre`
 font-size: 5px;
`

export default NotFound;
