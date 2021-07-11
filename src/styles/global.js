import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
      box-sizing: border-box;
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    };
    main {
      margin-left: 20px;
      margin-right: 20px;
    }
  `;

export default GlobalStyle;
