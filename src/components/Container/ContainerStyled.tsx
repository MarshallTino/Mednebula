import styled from 'styled-components';

// Main wrapper for the entire content column
export const MainColumnWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Max width for desktop */
  margin: 24px auto; /* Added vertical margin to create space at top and bottom */
  background-color: white; /* Changed from gray100 to white */
  overflow: hidden; 
  position: relative;
  border-radius: 16px; /* Rounded corners for mobile too */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.08); /* Shadow for all devices */
  border: 1px solid rgba(0, 0, 0, 0.03); /* Border for all devices */

  @media (min-width: 768px) { /* Apply desktop styles */
    margin: 32px auto; /* Increased vertical margin for desktop */
    border-radius: 32px; /* Larger border radius for desktop */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1); /* Enhanced shadow for desktop */
  }
`;

// This is a reusable container component that will create the centered, 
// narrower content area you want throughout the site
export const ContentContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 20px; /* Reduced padding for small screens */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; /* Prevent horizontal overflow */
  
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`;

// This creates the alternating section backgrounds with contrasting colors
export const SectionContainer = styled.section<{ $bgColor?: 'white' | 'light' | 'dark' | 'gradient' }>`
  width: 100%;
  max-width: 100%;
  padding: 40px 0; /* Default padding for sections that aren't first */
  position: relative;
  overflow: hidden; 
  background: ${props => {
    switch (props.$bgColor) {
      case 'white':
        return props.theme.colors.mainLight;
      case 'dark':
        return props.theme.colors.gray800;
      case 'gradient':
        return props.theme.colors.blueGradient;
      case 'light':
         // Use gray100 for light sections *only on desktop* where the wrapper isn't gray
         // On mobile, the wrapper is transparent, so light sections can be transparent too
         return props.theme.colors.gray100; 
      default:
        return 'transparent';
    }
  }};
  color: ${props => props.$bgColor === 'dark' ? props.theme.colors.mainLight : props.theme.colors.gray900};

  /* Remove separation line on mobile and desktop */
  &:not(:last-child)::after {
    content: none; /* Hide line */
  }

  /* Make first section flush with container */
  &:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    padding-top: 0; /* Remove padding to make it flush */
    margin-top: 0; /* Ensure no margin */
  }
  
  &:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media (min-width: 768px) { /* Apply desktop styles */

    /* Ensure separation line remains removed on desktop */
    &:not(:last-child)::after {
      content: none;
    }

    /* Ensure first section is flush with container on desktop too */
    &:first-child {
      padding-top: 0; /* No padding on desktop either */
    }
    
    &:last-child {
      padding-bottom: 60px; /* More padding on desktop */
    }

    /* Ensure light sections have a background distinct from the wrapper on desktop */
    background: ${props => {
      switch (props.$bgColor) {
        case 'white':
          return props.theme.colors.mainLight;
        case 'dark':
          return props.theme.colors.gray800;
        case 'gradient':
          return props.theme.colors.blueGradient;
        case 'light':
           // Use gray100 for light sections on desktop
           return props.theme.colors.gray100; 
        default:
          // If wrapper is gray100 on desktop, default sections should probably be white
          return props.theme.colors.mainLight; 
      }
    }};
  }
`;

// For card-based sections like your news and resources section
export const CardSectionStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
