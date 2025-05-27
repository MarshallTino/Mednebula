import styled, { keyframes, css } from "styled-components";
import { Link } from 'react-scroll';

// Animations
const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(106, 90, 205, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(106, 90, 205, 0); }
  100% { box-shadow: 0 0 0 0 rgba(106, 90, 205, 0); }
`;

const shineAnimation = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const hoverUpAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-3px); }
`;

// Button type enum
export enum ButtonType {
  // Standard blue button that becomes purple on hover
  DEFAULT = "default",
  
  // Gradient button (purple and blue) with animations
  GRADIENT = "gradient",
  
  // White outline button (used on landing page)
  OUTLINE = "outline",

  // Blue outline button (used on light backgrounds)
  OUTLINE_DARK = "outline-dark"
}

interface ButtonStyledProps {
  $buttonType?: ButtonType;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  height: auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  padding: 12px 28px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  
  /* Base styles for focus and disabled states */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.5);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray500};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  /* DEFAULT BUTTON: Solid Blue that turns Purple */
  ${({ $buttonType, theme }) => ($buttonType === ButtonType.DEFAULT || !$buttonType) && css`
    color: ${theme.colors.mainLight};
    background-color: ${theme.colors.base};
    border: none;
    box-shadow: ${theme.shadows.small};
    
    &:hover {
      background-color: ${theme.colors.accent};
      transform: translateY(-3px);
      box-shadow: ${theme.shadows.medium};
    }
    
    &:active {
      transform: translateY(1px);
      box-shadow: ${theme.shadows.small};
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: all 0.6s;
    }
    
    &:hover::before {
      left: 100%;
    }
  `}
  
  /* GRADIENT BUTTON: Purple-Blue Gradient with Animations */
  ${({ $buttonType, theme }) => $buttonType === ButtonType.GRADIENT && css`
    color: ${theme.colors.mainLight};
    background: linear-gradient(135deg, ${theme.colors.base}, ${theme.colors.accent});
    border: none;
    box-shadow: ${theme.shadows.medium};
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      animation: ${shineAnimation} 1.5s infinite;
    }
    
    &:hover {
      background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.base});
      box-shadow: ${theme.shadows.large};
      animation: ${hoverUpAnimation} 0.3s forwards;
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  /* OUTLINE BUTTON: White Outline */
  ${({ $buttonType, theme }) => $buttonType === ButtonType.OUTLINE && css`
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: ${theme.shadows.medium};
      animation: ${hoverUpAnimation} 0.3s forwards;
    }
    
    &:active {
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      padding: 10px 25px;
      font-size: 0.9rem;
      min-width: 200px;
    }
  `}
  
  /* OUTLINE DARK BUTTON: Blue Outline (for light backgrounds) */
  ${({ $buttonType, theme }) => $buttonType === ButtonType.OUTLINE_DARK && css`
    background-color: transparent;
    color: ${theme.colors.base};
    border: 2px solid ${theme.colors.base};
    
    &:hover {
      background-color: rgba(0, 113, 188, 0.08);
      box-shadow: ${theme.shadows.medium};
      animation: ${hoverUpAnimation} 0.3s forwards;
    }
    
    &:active {
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      padding: 10px 25px;
      font-size: 0.9rem;
      min-width: 200px;
    }
  `}
`;

// Props for the StyledLink component
interface StyledLinkProps {
  $buttonType?: ButtonType;
}

// Styled Link component for scroll links
export const StyledLink = styled(Link)<StyledLinkProps>`
  height: auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  
  /* DEFAULT BUTTON: Blue outline that fills on hover */
  ${({ $buttonType, theme }) => ($buttonType === ButtonType.DEFAULT || !$buttonType) && css`
    color: ${theme.colors.base};
    background-color: transparent;
    border: 2px solid ${theme.colors.base};
    
    &:hover {
      background-color: ${theme.colors.base};
      color: ${theme.colors.mainLight};
      box-shadow: ${theme.shadows.small};
    }
  `}
  
  /* GRADIENT BUTTON: Purple-Blue Gradient with Animations */
  ${({ $buttonType, theme }) => $buttonType === ButtonType.GRADIENT && css`
    color: ${theme.colors.mainLight};
    background: linear-gradient(135deg, ${theme.colors.base}, ${theme.colors.accent});
    border: none;
    box-shadow: ${theme.shadows.medium};
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      animation: ${shineAnimation} 1.5s infinite;
    }
    
    &:hover {
      background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.base});
      box-shadow: ${theme.shadows.large};
      animation: ${hoverUpAnimation} 0.3s forwards;
    }
  `}
  
  /* OUTLINE BUTTON: White Outline */
  ${({ $buttonType, theme }) => $buttonType === ButtonType.OUTLINE && css`
    color: white;
    background-color: transparent;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: ${theme.shadows.medium};
      animation: ${hoverUpAnimation} 0.3s forwards;
    }
    
    @media (max-width: 768px) {
      padding: 10px 25px;
      font-size: 0.9rem;
      min-width: 200px;
    }
  `}
`;

export default ButtonStyled;

