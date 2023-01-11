import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    @media (min-width: 500px) {
      display: flex;
      justify-content: center;
    }

  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
