import styled from "styled-components";

export const ContactPageStyled = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const SectionTitle = styled.h2`
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

export const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.gray700};
  margin: 0 auto 30px;
  max-width: 700px;
  line-height: 1.7;
`;

export const ContactLinkButton = styled.a`
  display: inline-block;
  padding: 14px 35px;
  background: ${props => props.theme.colors.base};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: ${props => props.theme.animations.transition};
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    background: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
