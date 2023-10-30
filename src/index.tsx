import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "typeface-mplus-1p";
import "@fontsource/istok-web";
import "@fontsource/oxanium/700.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
