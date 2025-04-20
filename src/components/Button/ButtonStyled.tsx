import styled, { keyframes, css } from "styled-components";
import { Link } from 'react-scroll';

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(106, 90, 205, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(106, 90, 205, 0); }
  100% { box-shadow: 0 0 0 0 rgba(106, 90, 205, 0); }
`;

interface ButtonStyledProps {
  $primary?: boolean;
  $secondary?: boolean;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  height: auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainLight};
  background-color: ${({ theme }) => theme.colors.base};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 12px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;

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

  &:hover {
    transform: translateY(-3px);
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    &::before { left: 100%; }
  }
  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
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
  ${({ $primary, theme }) => $primary && css`
    background: linear-gradient(135deg, ${theme.colors.base}, ${theme.colors.accent});
    color: ${theme.colors.mainLight};
    &:hover {
      background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.base});
      animation: ${pulseAnimation} 1.5s infinite;
    }
  `}
  ${({ $secondary, theme }) => $secondary && css`
    background-color: transparent;
    color: ${theme.colors.base};
    border: 2px solid ${theme.colors.base};
    &:hover {
      background-color: ${theme.colors.base};
      color: ${theme.colors.mainLight};
      border-color: ${theme.colors.base};
      animation: none;
      box-shadow: ${theme.shadows.small};
    }
  `}
`;

export default ButtonStyled;

interface StyledLinkProps {
  $primary?: boolean;
  $secondary?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: inline-block;
  height: auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainLight};
  background-color: ${({ theme }) => theme.colors.base};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 12px 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    transform: translateY(-3px);
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.5);
  }
  ${({ $primary, theme }) => $primary && css`
    background: linear-gradient(135deg, ${theme.colors.base}, ${theme.colors.accent});
    color: ${theme.colors.mainLight};
    &:hover {
      background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.base});
      animation: ${pulseAnimation} 1.5s infinite;
    }
  `}
  ${({ $secondary, theme }) => $secondary && css`
    background-color: transparent;
    color: ${theme.colors.base};
    border: 2px solid ${theme.colors.base};
    &:hover {
      background-color: ${theme.colors.base};
      color: ${theme.colors.mainLight};
      border-color: ${theme.colors.base};
      animation: none;
      box-shadow: ${theme.shadows.small};
    }
  `}
`;
