import styled from "styled-components";

const ButtonStyled = styled.button.attrs((props) => ({
  className: props.className,
}))`
  height: 60px;
  background-color: #ffffff;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainDark};
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
  }
`;
export default ButtonStyled;
