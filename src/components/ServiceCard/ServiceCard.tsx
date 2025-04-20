import React from "react";
import { ServiceCardContainer, ServiceImage, ServiceOverlay, ReadMoreButton } from "./ServiceCardStyled";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  route: string; // Changed from slug to route
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, route }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate only if route is not empty
    if (route) {
      navigate(route);
    }
  };

  return (
    <ServiceCardContainer onClick={handleCardClick} $isClickable={!!route}> {/* Pass clickable status */}
      <ServiceImage src={image} alt={title} />
      <ServiceOverlay className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        <ReadMoreButton>Leer Más</ReadMoreButton>
      </ServiceOverlay>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
