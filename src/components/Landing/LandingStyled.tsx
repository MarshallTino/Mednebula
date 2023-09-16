import { styled } from "styled-components";
const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: ${(props) => props.theme.colors.mainLight};
  background-image: linear-gradient(
      rgba(0, 113, 188, 0.9),
      rgba(0, 146, 69, 0.9)
    ),
    url("https://img.freepik.com/free-photo/family-forest_1303-4679.jpg?w=996&t=st=1694795143~exp=1694795743~hmac=d8f693382054c38d751455ed5573cbf93294d65732a95479aa3b20fdfba57de2");
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
    font-size: 30px;
    background-color: ${(props) => props.theme.colors.base};
    padding: 10px 50px;
    border-radius: 60px;
    text-align: center;
  }

  .landingpage__button {
    padding: 0 90px;
  }
`;

export default LandingStyled;
