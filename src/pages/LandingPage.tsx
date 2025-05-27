import React from "react";
import { solutionsData } from "../Data/solutionsData";
import { TeamMembers } from "../Data/TeamMembers";
import Banner from "../components/Banner/Banner";
// Removed Footer import as it's already included in the Layout
import { Landing } from "../components/Landing/Landing";
import OurTeam from "../components/TeamList/TeamList";
import RelevantInfo from "../components/RelevantInfo/RelevantInfo";
import ServiceList from "../components/ServiceList/ServiceList";
import SolutionsList from "../components/SolutionsList/SolutionsList";
import LandingPageStyled from "./LandingPageStyled";
import { SectionContainer, ContentContainer, MainColumnWrapper } from "../components/Container/ContainerStyled";
import styled from "styled-components";

const LandingPage = (): JSX.Element => {
  return (
    <LandingPageStyled>
      {/* Hero section */}
      <Landing />
      
      <MainColumnWrapper>
        {/* Solutions section - First section with additional top margin */}
        <SectionContainer $bgColor="white" id="solutionListSection" style={{ marginTop: '40px' }}>
          <ContentContainer>
            <SectionTitle>Acompañar a las familias</SectionTitle>
            <SolutionsList solutions={solutionsData} />
          </ContentContainer>
        </SectionContainer>

        {/* Centro Informativo section */}
        <SectionContainer $bgColor="light">
            <SectionTitle>Centro Informativo</SectionTitle>
            <RelevantInfo />
        </SectionContainer>
        
        {/* Services section */}
        <SectionContainer $bgColor="white">
          <ContentContainer>
            <SectionTitle>Nuestros Servicios</SectionTitle>
            <ServiceList />
          </ContentContainer>
        </SectionContainer>
        
        {/* Team section */}
        <SectionContainer $bgColor="light">
          <ContentContainer>
            <SectionTitle>Nuestro Equipo</SectionTitle>
            <OurTeam members={TeamMembers} />
          </ContentContainer>
        </SectionContainer>
        
        {/* Banner (call-to-action) section */}
        <SectionContainer $bgColor="gradient">
          <ContentContainer>
            <Banner 
              image="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1000"
              buttonPosition="left"
              buttonText="CONTÁCTANOS"
              buttonLink="/contacto"
              message="¿Necesitas ayuda o información adicional?"
              subtitle="Apoyamos y facilitamos la vida de personas con diversidad funcional mediante soluciones innovadoras y personalizadas"
            />
          </ContentContainer>
        </SectionContainer>
      </MainColumnWrapper>
      
      {/* Removed duplicate footer - already included in Layout component */}
    </LandingPageStyled>
  );
};

export default LandingPage;

// Consistent section titles with underline
const SectionTitle = styled.h2`
  font-size: 2.4rem; /* Increased for emphasis */
  font-weight: 800; /* Bolder */
  text-align: center;
  margin-bottom: 0; /* Remove margin below text */
  color: ${props => props.theme.colors.gray800};
  font-family: ${props => props.theme.fonts.primary};
  
  &::after {
    content: "";
    display: block;
    width: 100px; /* Wider underline */
    height: 4px;  /* Thicker */
    background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
    margin: 0 auto 30px; /* Remove top margin, add 30px bottom margin */
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.2rem; /* Slightly larger */
  color: ${props => props.theme.colors.gray600};
  margin: 0 auto 40px; /* More bottom spacing */
  max-width: 800px;
`;
