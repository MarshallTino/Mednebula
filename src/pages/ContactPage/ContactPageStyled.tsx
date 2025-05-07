import styled, { keyframes } from "styled-components";
import { ButtonType } from "../../components/Button/ButtonStyled";

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
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 6px;
  overflow: hidden;
  
  /* Use the DEFAULT button style - solid blue that turns purple on hover */
  color: ${props => props.theme.colors.mainLight};
  background-color: ${props => props.theme.colors.base};
  border: none;
  box-shadow: ${props => props.theme.shadows.small};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: all 0.6s;
  }
  
  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.medium};
    &::before { left: 100%; }
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
