import React from "react";
import ActivitiesServicesList from "../../components/ActivitiesServicesList/ActivitiesServiceslist";
import { MainColumnWrapper, SectionContainer, ContentContainer } from "../../components/Container/ContainerStyled";
import ButtonStyled from "../../components/Button/ButtonStyled";
import { ServicesHeroContainer, ServicesListSection } from "./ServicesPageStyled";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ActivitiesServicesPage = () => {
  const navigate = useNavigate();
  return (
    <MainColumnWrapper>
      {/* Hero Section with custom container */}
      <ServicesHeroContainer>
        <ContentContainer>
          <HeroSection>
            <HeroContent>
              <h1>Conectando y Apoyando a Personas con Diversidad Funcional</h1>
              <p>
                En MedNebula, ofrecemos una red de servicios adaptados para mejorar
                la calidad de vida de personas con diversidad funcional y de sus
                familias. Nuestra meta es crear un espacio inclusivo, donde puedan
                encontrar las actividades, el apoyo y la comunidad que necesitan.
              </p>
              <ButtonStyled $primary onClick={() => navigate('/contacto')}>CONTÁCTANOS</ButtonStyled>
            </HeroContent>
            <HeroImageWrapper>
              <img src="https://cdn.mednebula.com/static/landing/GHlNJCEyymLGYaOvghoC0OZUEmxbiro6foA5TbNAQIKRtwMXM4LIPeanUv8c9AL1/RuPkiBkhvh1ST6yEE3XkQjshEE2HxKCS8TN2esvB7GYAGJU8DLTgrOJ1hPaS4jfS.mp4" 
                alt="Personas con diversidad funcional realizando actividades" />
            </HeroImageWrapper>
          </HeroSection>
        </ContentContainer>
      </ServicesHeroContainer>
      
      {/* Services List Section with grey background */}
      <ServicesListSection>
        <ContentContainer>
          <ServicesSection>
            <SectionTitle>Nuestros Servicios</SectionTitle>
            <ActivitiesServicesList />
          </ServicesSection>
        </ContentContainer>
      </ServicesListSection>
      
      {/* Description Section */}
      <SectionContainer $bgColor="white">
        <ContentContainer>
          <DescriptionSection>
            <SectionTitle>Sobre Nuestros Servicios</SectionTitle>
            <p>
              En MedNebula, trabajamos codo a codo con los proveedores de servicios más
              punteros e innovadores del mercado y con asociaciones de diversidad
              funcional, sabedoras de las necesidades específicas que requieren las personas.
              Nuestro objetivo es crear un espacio donde puedan encontrar las actividades, 
              el apoyo y la comunidad que necesitan para mejorar su calidad de vida.
            </p>
          </DescriptionSection>
        </ContentContainer>
      </SectionContainer>
    </MainColumnWrapper>
  );
};

export default ActivitiesServicesPage;

// Styled components using theme variables
const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 20px 0;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.mainLight};
    margin-bottom: 20px;
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.gray200};
    line-height: 1.7;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  min-width: 300px;
  height: 400px;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.large};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.gray800};
  text-align: center;
  font-family: ${props => props.theme.fonts.primary};
  
  &::after {
    content: "";
    display: block;
    width: 120px;
    height: 3px;
    background: linear-gradient(to right bottom, #0071bc, #00253d);
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

const ServicesSection = styled.div`
  width: 100%;
`;

const DescriptionSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.gray700};
  }
`;
