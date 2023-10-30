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
background-color:#DFDFDF;
font-family: ${(props) => props.theme.fonts.primary};
background-color: ${(props) => props.theme.colors.mainLight};
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

  
.landingpage {
  background-image: linear-gradient(
      180deg,
      rgba(0, 113, 188, 0.9) 0.03%,
      rgba(0, 113, 188, 0.9) 70.82%,
      rgba(0, 58, 97, 0.9) 99.45%
    ),
    url("assets/landing.png"); }


`;

export default GlobalStyles;
