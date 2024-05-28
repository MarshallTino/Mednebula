import styled from "styled-components";

import { Link } from 'react-scroll';
const ButtonStyled = styled.button.attrs((props) => ({
  className: props.className,
}))`
  height: 60px;
  background-color: #ffffff;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainLight};
  background-color: ${(props) => props.theme.colors.mainNeutral};
  border-radius: 60px;

  /* Estilos adicionales según el className */
  &.landingpage__button {
    background-color: ${(props) => props.theme.colors.mainNeutral};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 25px;
    font-weight: 100;
    color: ${(props) => props.theme.colors.mainLight};
    border-radius: 15px;
    padding: 10px 60px;
    box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.25);
      &:hover {
    border-color: #ffffff;
    background-color: #88cc88;
  }
  }
`;
export default ButtonStyled;





export const StyledLink = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  display: inline-block;
  background-color: #ffffff;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainLight};
  background-color: ${(props) => props.theme.colors.mainNeutral};
  border-radius: 60px;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  padding: 0px 0px;

  &.landingpage__button {
    background-color: ${(props) => props.theme.colors.mainNeutral};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 25px;
    font-weight: 100;
    color: ${(props) => props.theme.colors.mainLight};
    border-radius: 15px;
    padding: px 30px;
    box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.25);
      &:hover {
        border-inline: 2px;  
    border-color: #ffffff;
    background-color: #88cc88;
  }
  }
`;
