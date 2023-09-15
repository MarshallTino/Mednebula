import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "typeface-mplus-1p";
import "@fontsource/istok-web";

import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
