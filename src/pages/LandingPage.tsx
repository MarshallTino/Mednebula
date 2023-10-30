import { solutionsData } from "../Data/solutionsData";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import { Landing } from "../components/Landing/Landing";
import { OurTeam } from "../components/OurTeam/OurTeam";
import ServiceList from "../components/ServiceList/ServiceList";
import SolutionsList from "../components/SolutionsList/SolutionsList";
import LandingPageStyled from "./LandingPageStyled";

const LandingPage = (): JSX.Element => {
  return (
    
    <LandingPageStyled>
      <Landing />
       <SolutionsList 
            solutions= {solutionsData} 
          />
      <ServiceList />
      <OurTeam />
         <Banner 
          image="/images/mas-informacion.svg" 
          buttonPosition="left" 
          buttonText="CONTACTAR" 
          message="¿Quieres más información?"
        />
        <Footer />
    </LandingPageStyled>

    
  );
};

export default LandingPage;
