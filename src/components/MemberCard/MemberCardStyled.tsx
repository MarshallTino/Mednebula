import styled from "styled-components";

export const MemberCardStyled = styled.div`
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.small};
  overflow: hidden;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px; /* Reduced width for better team display */
  flex: 0 0 auto;
  margin: 10px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

export const MemberImage = styled.img`
  width: 130px;
  height: 205px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid ${props => props.theme.colors.mainLight};
`;

export const MemberInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.mainDark};
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 15px;
    font-weight: 500;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 12px;

    a {
      color: ${props => props.theme.colors.gray600};
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${props => props.theme.colors.base};
      }
    }
  }
`;
