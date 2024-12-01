import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 4rem;
    color: #0071bc; /* Use your theme's primary color */
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: #00253d; /* Complementary theme color */
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    background-color: #31a467; /* Accent button color */
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #28a256; /* Slightly darker shade for hover */
    }
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe o el enlace es incorrecto.</p>
      <Link to="/">Volver al Inicio</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
