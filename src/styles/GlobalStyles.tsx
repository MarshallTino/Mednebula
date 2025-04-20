import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${props => props.theme.fonts.primary}, sans-serif; /* Use theme font */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    width: 100%;
    max-width: 100vw; /* Ensure content doesn't exceed viewport width */
  }
  
  body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  main { /* Add padding to main content area on mobile */
    @media (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    line-height: 1.3;
  }

  /* Fix container issues */
  .container, section, main, div {
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
