// src/components/ActivityServiceCard/ActivityServiceCard.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

interface ActivitiesServiceCardProps {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  onClick?: () => void;
}

/* Animations for the card */
const shimmerEffect = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ActivitiesServiceCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  height: 400px;
  animation: ${fadeIn} 0.5s ease-out forwards;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.large};
    
    .card-overlay {
      opacity: 1;
    }
    
    .card-button {
      opacity: 1;
      transform: translateY(0);
    }
    
    .card-content h2::after {
      width: 70%;
    }
    
    img {
      transform: scale(1.1);
    }
  }

  .card-image-container {
    position: relative;
    height: 200px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(0, 0, 0, 0) 0%, 
      rgba(0, 0, 0, 0.7) 100%);
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  .card-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    
    h2 {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.mainDark};
      margin-bottom: 15px;
      position: relative;
      padding-bottom: 10px;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40%;
        height: 3px;
        background: linear-gradient(to right, 
          ${props => props.theme.colors.base},
          ${props => props.theme.colors.accent});
        transition: width 0.3s ease;
        border-radius: 3px;
      }
    }
    
    p {
      font-size: 1rem;
      line-height: 1.5;
      color: ${props => props.theme.colors.gray700};
      flex: 1;
    }
  }
  
  .card-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(90deg, 
      ${props => props.theme.colors.base},
      ${props => props.theme.colors.accent});
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: ${props => props.theme.borderRadius.medium};
    font-weight: 600;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    background-size: 200% auto;
    
    &:hover {
      animation: ${shimmerEffect} 2s linear infinite;
    }
  }
  
  .card-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    background: ${props => props.theme.colors.accent};
    color: white;
    padding: 5px 10px;
    border-radius: ${props => props.theme.borderRadius.small};
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const ActivitiesServiceCard = ({
  title,
  shortDescription,
  image,
  onClick,
}: ActivitiesServiceCardProps) => {
  return (
    <ActivitiesServiceCardStyled onClick={onClick}>
      <div className="card-tag">Servicio</div>
      <div className="card-image-container">
        <img src={image} alt={title} />
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
      </div>
      <button className="card-button">Ver más</button>
    </ActivitiesServiceCardStyled>
  );
};

export default ActivitiesServiceCard;
