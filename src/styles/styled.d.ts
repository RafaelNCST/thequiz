import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      White: string;
      SecundaryWhite: string;
      Black: string;
      SecundaryBlack: string;
      Blue: string;
      Gray: string;
      Red: string;
      Green: string;
    };
  }
}
