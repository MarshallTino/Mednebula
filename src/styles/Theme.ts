import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fonts: {
    primary: "Oxanium",
    secondary: "29LT Adir",
    //primary: "mplus-1p",
    //secondary: "Istok Web",
    tertiary: "Oxanium",
  },
  colors: {
    // Main colors
    mainLight: "#ffffff",
    base: "#0071bc",
    mainDark: "#00253d",
    
    // Gradients for consistent backgrounds
    blueGradient: "linear-gradient(to right bottom, #0071bc, #00253d)",
    
    // New modern accent color - Purple
    accent: "#6A5ACD", // Slate Blue
    accentLight: "#9D91E7",
    accentDark: "#483D8B",
    
    // Gray scale for modern look
    gray100: "#F8F9FA",
    gray200: "#E9ECEF",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#ADB5BD",
    gray600: "#6C757D",
    gray700: "#495057",
    gray800: "#343A40",
    gray900: "#212529",

    // Specific background color
    backgroundLightGrey: "#e4e4e4",
    backgroundServices: "#e4e4e4", // Added for Services page background
    
    // For backward compatibility
    mainNeutral: "#0071bc",
    mainNeutralLight: "#9D91E7", // Changed from green to purple
    mainNeutralDark: "#483D8B",  // Changed from green to purple
  },
  
  // Adding animations for modern feel
  animations: {
    transition: "all 0.3s ease-in-out",
    hover: "transform 0.2s ease-in-out",
    fadeIn: "fadeIn 0.5s ease-in-out",
  },
  
  // Adding shadows for depth
  shadows: {
    small: "0 2px 5px rgba(0,0,0,0.1)",
    medium: "0 5px 15px rgba(0,0,0,0.1)",
    large: "0 10px 25px rgba(0,0,0,0.1)",
  },
  
  // Adding border radius for modern rounded corners
  borderRadius: {
    small: "4px",
    medium: "8px", 
    large: "16px",
    round: "50%",
  },
};

export default theme;
