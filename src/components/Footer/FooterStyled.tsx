import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainDark};
  color: ${(props) => props.theme.colors.mainLight};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 70px 40px;
  }
`;

export const LogoContainer = styled.div`
  .logo__text {
    color: ${(props) => props.theme.colors.base};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  a {
    font-weight: bold;
    margin: 0 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const SocialContainer = styled.div`
  a {
    margin: 0 10px;
    font-size: 30px;
  }
`;

export const Copyright = styled.div`
  background-color: ${(props) => props.theme.colors.mainDark};
  color: ${(props) => props.theme.colors.mainLight};
  font-size: 12px;
  text-align: center;
  padding: 20px;
`;
