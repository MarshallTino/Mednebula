import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body{
  padding:10px;
font-family: "Istok Web";
}
ul,
li {
    list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a {
  color: inherit;
  text-decoration: inherit;
}

button {
  border: none;
}

h1,h2,h3{margin:0}
button, input {
    font-family: inherit;
    font-size: inherit;
    border: none;
  }

`;
export default GlobalStyles;
