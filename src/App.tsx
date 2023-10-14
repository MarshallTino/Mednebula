import React from "react";

import "./App.css";
import { Landing } from "./components/Landing/Landing";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Landing />
      <Banner 
        image="/images/mas-informacion.svg" 
        buttonPosition="left" 
        buttonText="CONTACTAR" 
        message="¿Quieres más información?"
      />
    </>
  );
}

export default App;
