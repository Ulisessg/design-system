import { Html, Head, Main, NextScript } from "next/document";
import GlobalStyles from "../components/pages/GlobalStyles";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
