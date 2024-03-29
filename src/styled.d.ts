import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark1: string;
      dark2: string;
      dark3: string;
      shadow: string;
      light1: string;
      light2: string;
      light3: string;
      error: string;
      warning: string;
    };
    spacing: number
  }
}
