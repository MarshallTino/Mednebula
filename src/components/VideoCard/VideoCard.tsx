// src/components/VideoCard/VideoCard.tsx
import React from 'react';
import styled from 'styled-components';

interface VideoCardProps {
  videoUrl: string;
  title?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title }) => {
  if (!videoUrl) {
    return <EmptyContainer>No hay video disponible</EmptyContainer>;
  }

  return (
    <CardContainer>
      {title && <CardTitle>{title}</CardTitle>}
      <VideoContainer>
        <StyledVideo src={videoUrl} controls controlsList="nodownload" />
      </VideoContainer>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.mainLight};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  overflow: hidden;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray200};
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 360px;
`;

const CardTitle = styled.h3`
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
    content: '▶'; // Play icon or similar
    margin-right: 10px;
    color: ${props => props.theme.colors.base};
    font-size: 1rem;
  }
`;

const VideoContainer = styled.div`
  flex: 1; /* Allows this container to take up remaining space */
  padding: 0; /* Removed padding */
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
  position: relative;
  overflow: hidden; /* Ensures video does not overflow */
  height: 100%; /* Full height since no padding */
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
    pointer-events: none;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%; /* Fills the VideoContainer */
  object-fit: cover; /* Changed to cover to fill space, might crop video */
  border-radius: 0; /* Removed border radius to fill entire container */
  box-shadow: none; /* Removed shadow for cleaner look */
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

export default VideoCard;
