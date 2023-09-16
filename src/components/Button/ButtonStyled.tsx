import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 80px;
  background-color: #ffffff;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 30px;
  color: ${(props) => props.theme.colors.mainDark};
  border-radius: 60px;
`;
export default ButtonStyled;
