import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Raleway', sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;