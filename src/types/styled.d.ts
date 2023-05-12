// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
// ******************************************************************************

// Here we define some properties that we want to use for our app in the
// DefaultTheme interface. You can add or remove any property you need for your
// project here depending on your requirements.

import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
// we'll use a very simple theme with  palette and colors
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    bodyColor: string;
    textColor: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
