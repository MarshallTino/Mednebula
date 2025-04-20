import React from "react";
import Button from "../Button/Button";
import { StyledLink } from "../Button/ButtonStyled";
import { HeroSection, LandingContainer, Title, Subtitle, Description, ButtonContainer } from "./LandingStyled"; 
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <LandingContainer>
        <Title>MEDNEBULA</Title>
        <Subtitle>CONECTANDO CAMINOS, CREANDO FUTUROS</Subtitle>
        <Description>
          Tu plataforma integral para encontrar servicios, actividades y apoyo para personas con
          diversidad funcional y sus familias
        </Description>
        <ButtonContainer>
          <Button
            className="landingpage__button"
            action={() => navigate("/servicios")}
            text="EXPLORAR SERVICIOS"
            disabled={false}
          />
          <StyledLink
            className="landingpage__button secondary"
            to="solutionListSection"
            smooth={true}
            duration={500}
          >
            SABER MÁS
          </StyledLink>
        </ButtonContainer>
      </LandingContainer>
    </HeroSection>
  );
};
