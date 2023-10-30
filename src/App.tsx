import "./App.css";
import { Landing } from "./components/Landing/Landing";
import Banner from "./components/Banner/Banner";
import OurTeam from "./components/OurTeam/OurTeam";
import SolutionsList from "./components/SolutionsList/SolutionsList";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { solutionsData } from "./data/solutionsData";
import { teamData } from "./data/teamData";
function App() {
  return (
    <>
      <Landing />
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
