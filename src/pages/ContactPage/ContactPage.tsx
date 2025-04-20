// src/pages/ContactPage/ContactPage.tsx
import React from "react";
import { SectionContainer, ContentContainer, MainColumnWrapper } from "../../components/Container/ContainerStyled";
import { ContactPageStyled, SectionTitle, SectionDescription, ContactLinkButton } from "./ContactPageStyled";

const ContactPage = (): JSX.Element => {
  const emailAddress = "placeholder@mednebula.com"; // Replace with your actual email

  return (
    <ContactPageStyled>
      <MainColumnWrapper>
        <SectionContainer $bgColor="light">
          <ContentContainer>
            <SectionTitle>Contacta con Nosotros</SectionTitle>
            <SectionDescription>
              ¿Tienes preguntas o necesitas más información? No dudes en enviarnos un correo electrónico. 
              Nuestro equipo está aquí para ayudarte.
            </SectionDescription>
            
            <ContactLinkButton href={`mailto:${emailAddress}`}>
              Enviar Correo Electrónico
            </ContactLinkButton>

            <SectionDescription style={{ marginTop: '30px', fontSize: '0.9rem' }}>
              Intentamos responder a todas las consultas en un plazo de 24-48 horas laborables.
            </SectionDescription>
          </ContentContainer>
        </SectionContainer>
      </MainColumnWrapper>
    </ContactPageStyled>
  );
};

export default ContactPage;
