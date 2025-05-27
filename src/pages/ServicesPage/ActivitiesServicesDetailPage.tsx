// src/pages/ServicesPage/ActivitiesServicesDetailPage.tsx
import React, { useState, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ActivitiesServices } from "../../Data/ActivitesServices";
import { ActivityServiceItem } from "../../Data/servicesTypes";
import { MainColumnWrapper, SectionContainer, ContentContainer } from "../../components/Container/ContainerStyled";
import ButtonStyled, { ButtonType } from "../../components/Button/ButtonStyled";
import VideoCard from "../../components/VideoCard/VideoCard";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ExpandableCard from "../../components/ExpandableCard/ExpandableCard";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const service = ActivitiesServices.find((item) => item.slug === slug) as ActivityServiceItem;
  // Add state for each expandable card
  const [isBenefitsExpanded, setIsBenefitsExpanded] = useState(false);
  const [isMethodologyExpanded, setIsMethodologyExpanded] = useState(false);

  // Use useLayoutEffect to scroll to top before the page renders
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handlers for each card - completely independent behavior
  const toggleBenefits = () => {
    // Simply toggle the state without affecting the other dropdown
    setIsBenefitsExpanded(!isBenefitsExpanded);
  };

  const toggleMethodology = () => {
    // Simply toggle the state without affecting the other dropdown
    setIsMethodologyExpanded(!isMethodologyExpanded);
  };

  if (!service) {
    return (
      <MainColumnWrapper>
        <SectionContainer>
          <ContentContainer>
            <NotFound>No se encontró el servicio solicitado.</NotFound>
          </ContentContainer>
        </SectionContainer>
      </MainColumnWrapper>
    );
  }

  return (
    <MainColumnWrapper>
      {/* Hero Section with gradient background - Shortened */}
      <SectionContainer $bgColor="gradient"> {/* Restored gradient prop */}
        <ContentContainer>
          <HeroSection>
            <HeroContent>
              <h1>{service.title}</h1>
              <p>
                {service.detail?.shortHeroDescription || (service.detail?.detailDescription && service.detail.detailDescription.substring(0, 150) + "...") || "Descripción no disponible."}
              </p>
              <ButtonStyled $buttonType={ButtonType.GRADIENT}>CONTACTAR</ButtonStyled>
            </HeroContent>
          </HeroSection>
        </ContentContainer>
      </SectionContainer>

      {/* Cards Grid Layout */}
      <SectionContainer $bgColor="light">
        <ContentContainer>
          <CardsGrid>
            {/* Top Left: Video Card */}
            <GridItem>
              <VideoCard 
                videoUrl={service.detail.video || ""} 
              />
            </GridItem>

            {/* Top Right: Image Carousel */}
            <GridItem>
              <ImageCarousel 
                images={service.galleryImages} 
              />
            </GridItem>

            <GridItem $flexibleHeight={true} className="benefits-grid-item">
              {/* Bottom Left: Benefits Card with Dropdown - updated with controlled state */}
              <ExpandableCard 
                title="Beneficios"
                id="benefits-card"
                isExpanded={isBenefitsExpanded}
                onToggle={toggleBenefits}
              >
                {service.detail.benefits && service.detail.benefits.length > 0 ? (
                  <BenefitsList>
                    {service.detail.benefits.map((benefit, index) => (
                      <BenefitsListItem key={index}>{benefit}</BenefitsListItem>
                    ))}
                  </BenefitsList>
                ) : (
                  <p>No hay beneficios específicos detallados para este servicio.</p>
                )}
              </ExpandableCard>
            </GridItem>

            <GridItem $flexibleHeight={true} className="methodology-grid-item">
              {/* Bottom Right: Methodology Card with Dropdown - updated with controlled state */}
              <ExpandableCard 
                title="Metodología"
                id="methodology-card"
                isExpanded={isMethodologyExpanded}
                onToggle={toggleMethodology}
              >
                {service.detail.methodology && service.detail.methodology.length > 0 ? (
                  <MethodologyList>
                    {service.detail.methodology.map((method, index) => (
                      <MethodologyListItem key={index}>{method}</MethodologyListItem>
                    ))}
                  </MethodologyList>
                ) : (
                  <p>No hay metodología específica detallada para este servicio.</p>
                )}
              </ExpandableCard>
            </GridItem>
          </CardsGrid>
        </ContentContainer>
      </SectionContainer>
      
      {/* Provider Information Section - Enhanced Design */}
      {service.detail.provider && (
        <SectionContainer $bgColor="light">
          <ContentContainer>
            <ProviderInfoSection>
              <ProviderHeader>
                <ProviderLogoContainer>
                  {service.detail.providerLogo ? (
                    <ProviderLogo src={service.detail.providerLogo} alt={service.detail.provider} />
                  ) : (
                    <ProviderInitial>{service.detail.provider && service.detail.provider.charAt(0)}</ProviderInitial>
                  )}
                </ProviderLogoContainer>
                <ProviderTitleContainer>
                  <ProviderInfoHeading>Información del Proveedor</ProviderInfoHeading>
                  <ProviderName>{service.detail.provider}</ProviderName>
                </ProviderTitleContainer>
              </ProviderHeader>

              <ProviderContent>
                <ProviderDescriptionText>
                  {service.detail.detailDescription || "No hay descripción disponible para este proveedor."}
                </ProviderDescriptionText>
                
                <ProviderFeatureContainer>
                  <ProviderFeature>
                    <ProviderFeatureIcon>✓</ProviderFeatureIcon>
                    <span>Servicio Certificado</span>
                  </ProviderFeature>
                  <ProviderFeature>
                    <ProviderFeatureIcon>★</ProviderFeatureIcon>
                    <span>Alta Calidad</span>
                  </ProviderFeature>
                  <ProviderFeature>
                    <ProviderFeatureIcon>🔒</ProviderFeatureIcon>
                    <span>Confianza y Seguridad</span>
                  </ProviderFeature>
                </ProviderFeatureContainer>

                {service.detail.providerUrl && (
                  <ProviderWebLinkContainer>
                    <ProviderWebLink href={service.detail.providerUrl} target="_blank" rel="noopener noreferrer">
                      Visitar sitio web oficial
                    </ProviderWebLink>
                  </ProviderWebLinkContainer>
                )}
              </ProviderContent>
            </ProviderInfoSection>
          </ContentContainer>
        </SectionContainer>
      )}

      {/* Contact Section - Enhanced */}
      <SectionContainer $bgColor="light">
        <ContentContainer>
          <ContactSection>
            <ContactContent>
              <ContactHeading>¿Interesado en nuestros servicios?</ContactHeading>
              <ContactText>
                ¿Listo para transformar su bienestar o el de sus seres queridos? Nuestro equipo está aquí para responder a todas sus preguntas y ayudarle a dar el primer paso. Contáctenos hoy mismo para una consulta personalizada y descubra cómo nuestros servicios pueden marcar la diferencia en su calidad de vida.
              </ContactText>
              <ContactButtonWrapper>
                <ButtonStyled $buttonType={ButtonType.GRADIENT} onClick={() => navigate('/contacto')}>CONTACTAR AHORA</ButtonStyled>
                <ButtonStyled $buttonType={ButtonType.OUTLINE_DARK} onClick={() => navigate('/servicios')}>VER OTROS SERVICIOS</ButtonStyled>
              </ContactButtonWrapper>
            </ContactContent>
          </ContactSection>
        </ContentContainer>
      </SectionContainer>
    </MainColumnWrapper>
  );
};

export default ServiceDetailPage;

// Updated styles that use theme variables
const HeroSection = styled.div`
  width: 100%;
  text-align: center;
  padding: 60px 0 50px; /* Increased top padding */
  position: relative;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.9; // Adjust opacity as needed
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.mainLight};
    font-family: ${props => props.theme.fonts.primary};
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    letter-spacing: 0.5px;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray200};
    margin-bottom: 25px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 360px auto; /* Fixed height for top row, auto for bottom row */
  grid-gap: 30px;
  width: 100%;
  margin: 20px 0 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 360px) repeat(2, auto); /* Adjust for mobile */
    grid-gap: 25px;
  }
`;

const GridItem = styled.div<{ $flexibleHeight?: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: ${props => props.$flexibleHeight ? 'auto' : '360px'};
  height: 100%;
  margin-bottom: 0; /* Remove additional spacing - grid-gap handles it */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  /* Apply hover effects to contained elements to prevent layout issues */
  & > div {
    height: ${props => props.$flexibleHeight ? 'auto' : '100%'};
    transition: box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: ${props => props.theme.shadows.large};
    }
  }
`;

const BenefitsList = styled.ul`
  padding-left: 20px;
  margin: 15px 0;
  list-style-type: circle;
`;

const BenefitsListItem = styled.li`
  margin: 12px 0;
  color: ${props => props.theme.colors.gray700};
  line-height: 1.4;
  font-size: 1.05rem;
  position: relative;
  padding-left: 25px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: ${props => props.theme.colors.base};
    border-radius: 50%;
  }
`;

const MethodologyList = styled.ul`
  padding-left: 5px;
  margin: 15px 0;
  list-style-type: none;
  counter-reset: methodology-counter;
`;

const MethodologyListItem = styled.li`
  margin: 12px 0;
  color: ${props => props.theme.colors.gray700};
  line-height: 1.4;
  font-size: 1.05rem;
  position: relative;
  padding-left: 30px;
  counter-increment: methodology-counter;
  
  &:before {
    content: counter(methodology-counter);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.base};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding: 60px 20px;
  color: ${props => props.theme.colors.gray700};
`;

// Contact section styled components - Enhanced
const ContactSection = styled.div`
  width: 100%;
  padding: 0;
  margin: 30px 0 50px;
  background: linear-gradient(135deg, ${props => props.theme.colors.mainLight} 0%, ${props => props.theme.colors.gray100} 100%);
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.gray200};
  min-height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background-color: rgba(${props => props.theme.colors.baseRGB}, 0.1);
    border-radius: 0 0 0 150px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: rgba(${props => props.theme.colors.accentRGB}, 0.1);
    border-radius: 0 100px 0 0;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 40px;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.mainDark};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  position: relative;
  display: inline-block;
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.base} 0%, ${props => props.theme.colors.accent} 100%);
    border-radius: 2px;
  }
`;

const ContactText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.gray700};
  margin-bottom: 35px;
  max-width: 650px;
  text-align: center;
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Provider Information Section Styled Components - Enhanced
const ProviderInfoSection = styled.div`
  text-align: left;
  padding: 0;
  margin: 30px 0;
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.gray200};
  min-height: 350px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const ProviderHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 35px;
  background: linear-gradient(135deg, ${props => props.theme.colors.base} 0%, ${props => props.theme.colors.accent} 100%);
  color: white;
`;

const ProviderLogoContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensure image conforms to the circular shape */
  padding: 0; /* Remove padding to allow the image to fill the container */
`;

const ProviderInitial = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProviderLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  padding: 2px; /* Add a small padding to create space from the border */
`;

const ProviderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProviderContent = styled.div`
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ProviderFeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 10px;
`;

const ProviderFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  color: ${props => props.theme.colors.gray700};
`;

const ProviderFeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
`;

const ProviderWebLinkContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
`;

const ProviderInfoHeading = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProviderName = styled.h3`
  font-size: 1.8rem;
  color: white;
  font-family: ${props => props.theme.fonts.secondary};
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const ProviderWebLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  padding: 12px 20px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.borderRadius.medium};
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: white;
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.medium};
    
    &:before {
      transform: translateX(4px);
    }
  }
  
  &:before {
    content: '→';
    transition: transform 0.2s ease;
    margin-right: 5px;
  }
`;

const ProviderDescriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.gray700};
  margin: 0;
  font-weight: 400;
`;
