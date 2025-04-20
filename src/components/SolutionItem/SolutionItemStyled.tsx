import styled from "styled-components";

export const SolutionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 280px;
  margin: 0 15px 30px;
  transition: ${props => props.theme.animations.transition};
  
  &:hover {
    transform: translateY(-5px);
    
    .icon-container {
      box-shadow: ${props => props.theme.shadows.medium};
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const IconContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: ${props => props.theme.borderRadius.round}; // Perfect circle
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: ${props => props.theme.animations.transition};
  border: 3px solid ${props => props.theme.colors.gray200};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.gray800};
  margin-bottom: 10px;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray600};
  margin: 0;
  max-width: 100%;
`;

// Add subtle animation on hover
export const AnimatedIcon = styled.div`
  transition: transform 0.3s ease;
  
  ${SolutionItemContainer}:hover & {
    transform: scale(1.1);
  }
`;
