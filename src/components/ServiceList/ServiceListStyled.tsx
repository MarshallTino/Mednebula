import { styled, keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServiceListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0 60px;
  position: relative;
  
  .services-list__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 50px;
    text-align: center;
    color: ${props => props.theme.colors.mainDark};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${props => props.theme.colors.accent};
      border-radius: 2px;
    }
  }
  
  .services-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }
  
  /* Modern section styling */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
    border-radius: 3px;
  }
  
  /* Section title styling */
  .services-list__title {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.mainDark};
    position: relative;
    padding-bottom: 15px;
    animation: ${fadeInUp} 0.6s ease-out forwards;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(to right, ${props => props.theme.colors.base}, ${props => props.theme.colors.accent});
      border-radius: 2px;
    }
  }
  
  /* Grid container for service cards */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    width: 100%;
    justify-items: center;
  }
  
  /* Card wrapper with animation delay for staggered entrance */
  .service-card-wrapper {
    opacity: 0;
    animation: ${fadeInUp} 0.6s ease-out forwards;
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    &:nth-child(4) {
      animation-delay: 0.6s;
    }
    
    &:nth-child(5) {
      animation-delay: 0.8s;
    }
    
    &:nth-child(6) {
      animation-delay: 1.0s;
    }
  }

  .services-list__spacer {
    margin: 40px auto;
    width: 60%;
    height: 2px;
    background: linear-gradient(to right, transparent, ${props => props.theme.colors.gray400}, transparent);
    border: none;
  }

  @media (max-width: 1200px) {
    padding: 40px 30px;
    
    .services-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 25px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 0px 0px 0px;
    
    .services-list__title {
      font-size: 2rem;
      margin-bottom: 30px;
    }
    
    .services-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

export default ServiceListStyled;
