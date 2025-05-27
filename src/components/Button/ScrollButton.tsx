import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from 'react-scroll';
import { ButtonType } from "./ButtonStyled";

// Animations
const shineAnimation = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const hoverUpAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-3px); }
`;

// Base styled component for the link styling
const BaseScrollLink = styled(Link)`
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
`;

// Specific styled links for each button type
const DefaultScrollLink = styled(BaseScrollLink)`
  color: ${({ theme }) => theme.colors.base};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.base};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.base};
    color: ${({ theme }) => theme.colors.mainLight};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

const GradientScrollLink = styled(BaseScrollLink)`
  color: ${({ theme }) => theme.colors.mainLight};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.base}, ${({ theme }) => theme.colors.accent});
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
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
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.base});
    box-shadow: ${({ theme }) => theme.shadows.large};
    animation: ${hoverUpAnimation} 0.3s forwards;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const OutlineScrollLink = styled(BaseScrollLink)`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    animation: ${hoverUpAnimation} 0.3s forwards;
  }
  
  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 0.9rem;
    min-width: 200px;
  }
`;

// Props for the ScrollButton component
interface ScrollButtonProps {
  buttonType?: ButtonType;
  to: string;
  smooth?: boolean;
  duration?: number;
  offset?: number;  // Add offset prop for adjusting scroll position
  className?: string;
  children: React.ReactNode;
}

// React component wrapper for the styled scroll links
const ScrollButton: React.FC<ScrollButtonProps> = ({ 
  buttonType = ButtonType.DEFAULT, 
  children, 
  ...props 
}) => {
  switch (buttonType) {
    case ButtonType.GRADIENT:
      return <GradientScrollLink {...props}>{children}</GradientScrollLink>;
    case ButtonType.OUTLINE:
      return <OutlineScrollLink {...props}>{children}</OutlineScrollLink>;
    case ButtonType.DEFAULT:
    default:
      return <DefaultScrollLink {...props}>{children}</DefaultScrollLink>;
  }
};

export default ScrollButton;
