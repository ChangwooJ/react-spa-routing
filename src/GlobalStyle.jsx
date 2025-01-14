import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  p {
     margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobalStyle;
