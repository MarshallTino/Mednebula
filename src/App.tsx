import React from "react";
import { removeIframe } from "./fn/removeIframe";

import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  removeIframe();
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
