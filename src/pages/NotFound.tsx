import React from "react";
import { Link } from "react-router-dom";
import { SectionContainer, ContentContainer } from "../components/Container/ContainerStyled";
import styled from "styled-components";
import ButtonStyled, { ButtonType } from "../components/Button/ButtonStyled";

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.gray800};
  font-family: ${props => props.theme.fonts.primary};
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

// Styled link component that extends our button styling
const NotFoundButton = styled(Link)`
  display: inline-block;
  margin: 20px 10px 0 10px;
  padding: 14px 35px;
  background: ${props => props.theme.colors.base};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.small};
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  }
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.medium};
    &::before { left: 100%; }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const NotFound: React.FC = () => {
  return (
    <SectionContainer $bgColor="light">
      <ContentContainer>
        <SectionTitle>404 - Página no encontrada</SectionTitle>
        <p style={{ fontSize: "1.2rem", color: "#555", textAlign: "center", marginBottom: 30 }}>
          La página que buscas no existe o el enlace es incorrecto.
        </p>
        <div style={{ textAlign: "center" }}>
          <NotFoundButton to="/">Volver al Inicio</NotFoundButton>
          <NotFoundButton to="/contacto">Ir a Contacto</NotFoundButton>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default NotFound;
