import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


body{
background-color:#DFDFDF;
font-family: ${(props) => props.theme.fonts.primary};
}
html, body{
overflow-x: hidden;
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
