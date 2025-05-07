import styled, { keyframes } from "styled-components";

// Add subtle wave animation for a modern dynamic feel
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const waveAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Hero section with improved contrast for accessibility
export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Improved contrast blue gradient for better accessibility */
  background: ${props => props.theme.colors.blueGradient};
  
  @media (max-width: 768px) {
    height: 100vh;
    min-height: 650px;
    padding: 100px 0 50px;
    
    /* Counteract global main padding on mobile */
    margin-left: -15px; 
    margin-right: -15px;
    width: calc(100% + 30px);
    max-width: calc(100% + 30px); /* Ensure it can exceed parent width */
    box-sizing: border-box; /* Include padding/border in element's total width/height */
  }
`;

export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh; // Adjust height as needed
  padding: 32px 20px 80px 20px; // Reduced top padding, kept bottom padding
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 30px 15px 60px 15px; // Adjust padding for smaller screens, reduced top
  }
`;

// Add Logo styled component
export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
`;

// Updated Title with better contrast for readability
export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 3.5rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Updated Subtitle with better contrast
export const Subtitle = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 25px;
  color: #FFFFFF;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

// Updated Description with better contrast
export const Description = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #FFFFFF;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// Updated ButtonContainer with more distinctive styling
export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  .landingpage__button {
    padding: 12px 30px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.95rem;
    border-radius: 6px;
  }
  
  .secondary {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    
    .landingpage__button {
      padding: 10px 25px;
      font-size: 0.9rem;
      min-width: 200px;
    }
  }
`;

// Keep the original naming for backward compatibility
export const LandingStyled = HeroSection;
export const LandingTitle = Title;
export const LandingSubtitle = Subtitle;
