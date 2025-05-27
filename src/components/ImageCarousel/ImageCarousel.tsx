// src/components/ImageCarousel/ImageCarousel.tsx
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageCarouselProps {
  images: string[];
  title?: string;
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  title = "", 
  autoPlay = false, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        nextImage();
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length, nextImage]);

  if (images.length === 0) {
    return <EmptyContainer>No hay imágenes disponibles</EmptyContainer>;
  }

  return (
    <CarouselContainer>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      <ImageContainer>
        <CarouselButton onClick={prevImage} className="prev" aria-label="Imagen anterior">
          <FaChevronLeft />
        </CarouselButton>
        <CarouselImage src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
        <CarouselButton onClick={nextImage} className="next" aria-label="Imagen siguiente">
          <FaChevronRight />
        </CarouselButton>
      </ImageContainer>
    </CarouselContainer>
  );
};

// Styled Components
const CarouselContainer = styled.div`
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  overflow: hidden;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray200};
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 360px;
`;

const CarouselTitle = styled.h3`
  font-size: 1.2rem; // Reduced font size
  font-weight: 700; // Increased font weight
  color: ${props => props.theme.colors.mainDark}; // Darker color for better contrast
  margin: 0;
  padding: 12px 18px; // Adjusted padding
  height: auto; // Auto height to fit content
  min-height: 48px; // Minimum height for consistency
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.secondary};
  background: ${props => props.theme.colors.gray100};
  border-bottom: 1px solid ${props => props.theme.colors.gray300};
  text-transform: uppercase; // Uppercase text for a more formal look
  letter-spacing: 0.5px; // Added letter spacing

  &::before {
    content: '🖼️'; // Image icon or similar
    margin-right: 10px;
    color: ${props => props.theme.colors.base};
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1; /* Allows this container to take up remaining space */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  padding: 0; /* Removed padding */
  background: linear-gradient(135deg, #f0f0f0 0%, #f9f9f9 100%);
  height: 100%; /* Full height since no padding */
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 30px rgba(0,0,0,0.05);
    pointer-events: none;
    z-index: 1;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
  border-radius: 0; /* Removed border radius to fill entire container */
  box-shadow: none; /* Removed shadow for cleaner look */
  
  &:hover {
    transform: scale(1.02);
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 113, 188, 0.7); /* Using theme base color */
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth animation */
  z-index: 2;
  opacity: 0.9;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  
  &.prev {
    left: 15px;
  }
  
  &.next {
    right: 15px;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.base};
    transform: translateY(-50%) scale(1.15);
    opacity: 1;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;



const EmptyContainer = styled.div`
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 20px;
  text-align: center;
  color: ${props => props.theme.colors.gray600};
  height: 100%;
  min-height: 360px; /* Updated to match other components */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.gray200};
`;

export default ImageCarousel;
