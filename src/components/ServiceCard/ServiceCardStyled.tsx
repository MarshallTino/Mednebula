// src/components/ServiceCard/ServiceCardStyled.tsx
import styled from "styled-components";

export const ServiceCardContainer = styled.div<{ $isClickable?: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.large};
  height: 300px; // Consistent card height
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  transition: ${props => props.theme.animations.transition};
  margin-bottom: 20px; // Consistent spacing between cards
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px); // Subtle lift effect on hover
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    
    img {
      transform: scale(1.05); // Subtle zoom on hover
      filter: brightness(0.7) saturate(1.2); // Slightly darker and more vibrant on hover
    }
    
    .overlay {
      background: rgba(0, 37, 61, 0.8); // Darker overlay on hover for better contrast
    }
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
`;

export const ServiceOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px; // Consistent padding
  background: linear-gradient(transparent, rgba(0, 30, 60, 0.9)); // Stronger gradient overlay for better contrast
  color: white;
  transition: ${props => props.theme.animations.transition};
  text-align: left; // Align text to the left as in screenshot
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.primary};
  }
  
  p {
    font-size: 0.95rem;
    margin-bottom: 10px;
    opacity: 0.9;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; // Limit to 3 lines
    overflow: hidden;
  }
`;

export const ReadMoreButton = styled.span`
  color: ${props => props.theme.colors.accent};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  margin-top: 5px;
  transition: ${props => props.theme.animations.transition};
  
  &:hover {
    color: ${props => props.theme.colors.accentLight};
  }
`;
