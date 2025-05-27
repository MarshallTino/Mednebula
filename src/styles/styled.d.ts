import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    colors: {
      // Main colors
      mainLight: string;
      base: string;
      baseRGB: string; // RGB values for base color
      mainDark: string;
      
      // Gradients
      blueGradient: string;
      
      // Accent colors (purple)
      accent: string;
      accentRGB: string; // RGB values for accent color
      accentLight: string;
      accentDark: string;
      
      // Gray scale
      backgroundLightGrey: string;
      backgroundServices: string; // Added for Services page background

      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      
      // For backward compatibility
      mainNeutral: string;
      mainNeutralLight: string;
      mainNeutralDark: string;
    };
    
    // Animation properties
    animations: {
      transition: string;
      hover: string;
      fadeIn: string;
    };
    
    // Shadow styles
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
    
    // Border radius options
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
  }
}
