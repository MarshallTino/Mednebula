import { styled } from "styled-components";

const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: ${(props) => props.theme.colors.mainLight};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .landingpage__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .title__svg {
    width: 200px;
    height: 200px;
  }

  .title__text {
    font-family: ${(props) => props.theme.fonts.tertiary};
    font-size: 130px;
    font-weight: 800;
    letter-spacing: 0.01px;
  }
  .landingpage__texts-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .landingpage__subtitle {
    width: fit-content;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 100px;
    max-width: 1700px;
  }

  .landingpage__lema {
    width: fit-content;
    font-weight: 300;
    font-size: 34px;
    background-color: ${(props) => props.theme.colors.base};
    padding: 10px 50px;
    border-radius: 60px;
    text-align: center;
  }

  .landingpage__button {
    padding: 0 115px;
  }
`;

export default LandingStyled;
