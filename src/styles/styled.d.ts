import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    colors: {
      mainLight: string;
      base: string;
      mainDark: string;
      mainNeutral: string;
    };
  }
}
