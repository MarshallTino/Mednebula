import { styled } from "styled-components";

const ServiceDescriptionStyled = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  min-height: 450px;
  color: ${(props) => props.theme.colors.mainDark};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${(props) => props.theme.colors.mainLight};
  font-size: 25px;
  padding: 50px;
  font-family: ${(props) => props.theme.fonts.tertiary};

  .servicedescription__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }

  .servicedescription__title {
    width: 100%;
    font-size: 50px;
    border-bottom: 8px solid ${(props) => props.theme.colors.mainNeutral};
  }

  .servicedescription__description {
    width: 100%;
    max-width: 60%;
  }

  .white {
    color: ${(props) => props.theme.colors.mainDark};
    text-align: right;
    align-items: flex-end;
  }
`;

export default ServiceDescriptionStyled;
