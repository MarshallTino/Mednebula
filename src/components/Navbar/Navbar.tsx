import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logoFull from "../../assets/logofullcolor.svg"; // Import the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavbarStyled>
      <Link to="/" className="logo-link">
        <Logo src={logoFull} alt="MedNebula Logo" />
      </Link>
      
      {/* Mobile menu toggle */}
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </HamburgerMenu>
      
      <NavLinks $isOpen={isMenuOpen}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
          Inicio
        </Link>
        <Link to="/servicios" className={location.pathname.includes("/servicios") ? "active" : ""} onClick={closeMenu}>
          Servicios
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>
          Sobre Nosotros
        </Link>
        <Link to="/contacto" className={location.pathname === "/contacto" ? "active" : ""} onClick={closeMenu}>
          Contacto
        </Link>
      </NavLinks>
    </NavbarStyled>
  );
};

export default Navbar;

// Define styled components directly in this file
export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; // Ensure vertical alignment
  padding: 15px 30px; 
  background-color: ${props => props.theme.colors.mainLight}; 
  box-shadow: ${props => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;

  .logo-link {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 10px 15px; 
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  height: 50px; // Increased logo size for better visibility
  cursor: pointer;

  @media (max-width: 768px) {
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 25px;
  align-items: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray700};
    font-weight: 500;
    font-family: ${props => props.theme.fonts.primary};
    padding: 8px 15px;
    border-radius: ${props => props.theme.borderRadius.small};
    transition: ${props => props.theme.animations.transition};

    &:hover {
      color: ${props => props.theme.colors.base};
      background-color: ${props => props.theme.colors.gray100};
    }

    &.active {
      color: ${props => props.theme.colors.base};
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 10px;
    align-items: flex-start;

    a {
      padding: 10px;
      width: 100%;
      text-align: left;
      &:hover {
        background-color: ${props => props.theme.colors.gray200};
      }
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: ${props => props.theme.colors.gray800};

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
