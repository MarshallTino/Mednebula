import { styled } from "styled-components";

const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  gap: 20px;
  padding-bottom: 50px;
  color: ${(props) => props.theme.colors.mainLight};

  background-repeat: no-repeat;
  background-position: bottom;
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
    font-size: 100px;
    font-weight: 800;
    letter-spacing: 0.01px;
  }
  .landingpage__texts-container {
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .landingpage__subtitle {
    width: fit-content;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 80px;
    max-width: 1700px;
  }

  .landingpage__lema {
    width: fit-content;
    font-family: ${(props) => props.theme.fonts.primary};

    font-weight: 300;
    font-size: 24px;
    padding: 10px 50px;
    border-radius: 60px;
    text-align: center;
  }

  .landingpage__button {
    padding: 0 115px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    padding-top: 20px;
    .landingpage__title {
      .title__svg {
        width: 100px;
        height: 100px;
      }
      .title__text {
        font-size: 40px;
      }
    }
    .landingpage__texts-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .landingpage__subtitle {
      font-size: 40px;
    }

    .landingpage__lema {
      font-weight: 600;
      font-size: 17px;
      padding: 10px 30px;
    }

    .landingpage__button {
      padding: 0 50px;
      margin-bottom: 50px;
    }
  }
`;

export default LandingStyled;
