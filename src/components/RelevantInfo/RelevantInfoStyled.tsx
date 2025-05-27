import styled from "styled-components";

const RelevantInfoStyled = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0; /* Slightly reduced vertical margin */

  .info__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 30px;
    padding: 0 20px; /* Add horizontal padding to match other sections */
    
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: stretch;
      padding: 0 40px; /* Larger padding on tablets */
    }
    
    @media (min-width: 1024px) {
      padding: 0 60px; /* Even larger padding on desktops */
    }
  }

  .info__block {
    flex: 1;
    padding: 30px;
    background-color: ${props => props.theme.colors.mainLight};
    border-radius: 12px; /* Increased border radius */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12); /* Enhanced shadow for better contrast */
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.colors.gray200}; /* Added subtle border */
    position: relative; /* Needed for pseudo-elements */
    
    /* Removed top and bottom blue gradient lines */
    
    h3 {
      font-size: 1.65rem;
      margin-bottom: 22px;
      color: ${props => props.theme.colors.mainDark};
      position: relative;
      padding-bottom: 12px;
      font-weight: 700;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 70px;
        height: 4px;
        background: linear-gradient(to right, 
          ${props => props.theme.colors.base},
          ${props => props.theme.colors.accent});
        border-radius: 2px;
      }
    }
    
    .info__text {
      font-size: 1.05rem;
      line-height: 1.7;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.gray800}; /* Darker text for better readability */

      b {
        color: ${props => props.theme.colors.base}; /* Using base color for bold text */
        font-weight: 700;
      }
    }

    .info__green {
      font-size: 1.6rem; /* Smaller size */
      font-weight: 800;
      color: ${props => props.theme.colors.base}; /* Using brand color */
      margin: 10px 0 5px;
      text-align: left; /* Left-aligned as requested */
    }

    .info__video {
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 15px; 
      border: 1px solid ${props => props.theme.colors.gray300};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Added shadow to video */
    }

    .info__subtext {
      font-style: italic;
      color: ${props => props.theme.colors.gray700};
      text-align: center;
      font-size: 0.95rem;
      padding: 12px;
      background-color: ${props => props.theme.colors.gray100};
      border-radius: 6px;
      border-left: none; /* Removed blue accent */
    }
  }
`;

export default RelevantInfoStyled;
