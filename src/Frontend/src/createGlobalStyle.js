import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  .main-content {
    padding-top: 11em; /* Ajuste para a altura do header fixo */
  }
`;

export default GlobalStyles;