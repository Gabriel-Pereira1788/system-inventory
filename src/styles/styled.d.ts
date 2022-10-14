import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      main: {
        dark: string;
        yellowGold: string;
        graySmooth: string;
        colorText: string;
      };
    };
  }
}
