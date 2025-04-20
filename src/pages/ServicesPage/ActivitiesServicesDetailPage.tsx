// src/pages/ServicesPage/ActivitiesServicesDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ActivitiesServices } from "../../Data/ActivitesServices";
import { MainColumnWrapper, SectionContainer, ContentContainer } from "../../components/Container/ContainerStyled";
import ButtonStyled from "../../components/Button/ButtonStyled";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = ActivitiesServices.find((item) => item.slug === slug);

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
      {/* Hero Section with gradient background */}
      <SectionContainer $bgColor="gradient">
        <ContentContainer>
          <HeroSection>
            <HeroContent>
              <h1>{service.title}</h1>
              <p>
                {service.detail?.detailDescription || "Descripción no disponible."}
              </p>
              <ButtonStyled $primary>CONTACTAR</ButtonStyled>
            </HeroContent>
          </HeroSection>
        </ContentContainer>
      </SectionContainer>

      {/* Video and Description Section */}
      {service.detail.video && (
        <SectionContainer $bgColor="light">
          <ContentContainer>
            <ContentSection>
              <VideoContainer>
                <Video src={service.detail.video} controls />
              </VideoContainer>
              <TextContainer>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </TextContainer>
            </ContentSection>
          </ContentContainer>
        </SectionContainer>
      )}

      {/* Gallery Images Section */}
      <SectionContainer $bgColor="white">
        <ContentContainer>
          <GalleryTitle>Ejemplos de Actividades</GalleryTitle>
          <CarouselSection>
            {service.galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <Image src={image} alt={`${service.title} - Imagen ${index + 1}`} />
                <Caption>
                  <h3>Ejemplo de Actividad</h3>
                  <p>Descripción breve de la actividad.</p>
                </Caption>
              </CarouselItem>
            ))}
          </CarouselSection>
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
  padding: 20px 0; // Reduced padding since SectionContainer already has padding
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.mainLight};
    font-family: ${props => props.theme.fonts.primary};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray200};
    margin-bottom: 30px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  min-width: 300px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.gray800};
    font-family: ${props => props.theme.fonts.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${props => props.theme.colors.gray700};
  }
`;

const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.gray800};
  font-family: ${props => props.theme.fonts.primary};
  
  &::after {
    content: "";
    display: block;
    width: 120px;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

const CarouselSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const CarouselItem = styled.div`
  background: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: ${props => props.theme.animations.transition};
  border: 1px solid ${props => props.theme.colors.gray200};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Caption = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.gray800};
    font-family: ${props => props.theme.fonts.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.gray600};
    line-height: 1.5;
  }
`;

const NotFound = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding: 60px 20px;
  color: ${props => props.theme.colors.gray700};
`;
