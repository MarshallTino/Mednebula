import { styled } from "styled-components";

const RelevantInfoStyled = styled.div`
  padding-right: 80px;
  padding-left: 80px;
  margin-top: 15px;
  margin-bottom: 100px;
  text-align: center;

  .info__container {
    display: flex;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    justify-content: center;
  }

  .info__block {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px;
  }

  h1 {
    margin-top: 20px;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .info__text {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .info__green {
    font-size: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.mainNeutral};
  }

  .info__line {
    width: 90%;
    height: 1px;
    background-color: black;
    margin: 10px auto;
  }

  .info__subtext {
    font-size: 1.2rem;
    font-style: italic;
    margin-top: 20px;
  }

  .border__left {
    border-left: 1px solid black;
  }

  .info__video {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 40px;

    .info__block {
      width: 100%;
      margin: 0;
      gap: 10px;
    }

    .info__container {
      flex-direction: column;
      width: 100%;
    }

    .info__text {
      width: 100%;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .info__subtext {
      display: none;
    }
  }
`;
export default RelevantInfoStyled;
