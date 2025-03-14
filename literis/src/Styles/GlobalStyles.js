import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color:rgb(250, 250, 250);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .product-list {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;

export default GlobalStyles;