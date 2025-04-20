import styled from "styled-components";

interface BannerStyledProps {
  $backgroundImage: string;
  $buttonPosition: "left" | "right";
}

const BannerStyled = styled.div<BannerStyledProps>`
  width: 100%;
  display: flex;
  align-items: stretch; /* Make children stretch vertically */
  justify-content: space-between;
  background: ${props => props.theme.colors.blueGradient};
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  margin: 3rem 0 0; /* Remove bottom margin */
  padding: 0;
  min-height: 400px; /* Adjusted min-height */
  flex-direction: ${props => props.$buttonPosition === "left" ? "row-reverse" : "row"};
  
  @media (max-width: 992px) {
    flex-direction: column;
    min-height: auto;
    margin: 2rem 0 0; /* Adjust mobile margin */
    border-radius: 0; /* Remove radius on mobile if it's the last element */
  }

  .banner-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2.5rem; /* Consistent padding */
    justify-content: center;
    z-index: 2;
    color: white; /* Ensure text is white */
    
    @media (max-width: 992px) {
      padding: 2rem 1.5rem; /* Adjust mobile padding */
      text-align: center;
      align-items: center;
    }
  }

  .banner-image {
    flex: 1;
    min-height: 300px; /* Ensure image area has height */
    display: flex;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
    position: relative; /* For potential overlay/gradient */
    
    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    
    @media (max-width: 992px) { /* Changed breakpoint to 992px */
      width: 100%;
      max-height: 350px; /* Limit image height on mobile */
      min-height: 250px;
    }
  }

  .banner__title {
    font-size: 2.2rem; /* Slightly adjusted size */
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
    max-width: 600px;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  .banner__subtitle {
    font-size: 1.1rem; /* Slightly adjusted size */
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
    max-width: 500px;
    font-weight: 400;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .button-container {
    margin-top: 1rem;
    
    .landingpage__button {
      background-color: white;
      color: ${props => props.theme.colors.base};
      font-weight: 600;
      padding: 12px 28px; /* Adjusted padding */
      font-size: 1rem; /* Adjusted font size */
      border-radius: ${props => props.theme.borderRadius.small};
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export default BannerStyled;
