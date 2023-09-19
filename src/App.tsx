import React from "react";

import "./App.css";
import { Landing } from "./components/Landing/Landing";
import ServiceDescription from "./components/ServiceDescription/ServiceDescription";
import { Services } from "./Data/Services";
function App() {
  return (
    <>
      <Landing />
      <ServiceDescription {...Services[0]} />
      <ServiceDescription {...Services[1]} />
    </>
  );
}

export default App;
