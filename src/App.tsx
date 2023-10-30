import React from "react";

import "./App.css";
import { Landing } from "./components/Landing/Landing";
import { solutionsData } from "./Data/solutionsData";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { OurTeam } from "./components/OurTeam/OurTeam";
import SolutionsList from "./components/SolutionsList/SolutionsList";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
      <Content>
        <div className="container">
          <SolutionsList 
            solutions= {solutionsData} 
          />
          <OurTeam 
            /*members= {teamData}*/
          />
        </div>
        <Banner 
          image="/images/mas-informacion.svg" 
          buttonPosition="left" 
          buttonText="CONTACTAR" 
          message="¿Quieres más información?"
        />
        <Footer />
      </Content>
    </>
  );
}

export default App;
