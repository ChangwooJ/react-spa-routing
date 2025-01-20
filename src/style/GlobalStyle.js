import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body[data-theme='light'] {
        background-color: #ffffff;
        color: #000000;
    }

    body[data-theme='dark'] {
        background-color: #121212;
        color: #ffffff;
    }
    
    body {
        font-family: sans-serif;
        font-size: 16px;
        transition: background-color 0.3s, color 0.3s;
    }
`;

export default GlobalStyle;
