import styled from "styled-components";

interface BannerStyledProps {
  backgroundImage: string;
  buttonPosition: "left" | "right";
}

const BannerStyled = styled.div<BannerStyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#0071bc, #00558d);

  flex-direction: ${(props) =>
    props.buttonPosition === "left" ? "row-reverse" : "row"};
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    //height: auto;
    padding: 20px;
    gap: 20px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      margin-left: ${(props) =>
        props.buttonPosition === "left" ? "auto" : "0"};
      margin-right: ${(props) =>
        props.buttonPosition === "right" ? "auto" : "0"};
    }
  }

  .banner__title {
    font-family: ${(props) => props.theme.fonts.primary};
    @media (min-width: 768px) {
      margin-left: ${(props) =>
        props.buttonPosition === "right" ? "auto" : "0"};
      margin-right: ${(props) =>
        props.buttonPosition === "left" ? "auto" : "0"};
    }
    max-width: 200px;
    font-size: 30px;
    color: #fff;
  }
`;
export default BannerStyled;
