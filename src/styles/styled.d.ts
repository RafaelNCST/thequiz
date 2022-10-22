import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      Primary: string;
      Secundary: string;

      Inverted: string;
      Text: string;
    };
  }
}
