import styled from "styled-components";

const MemberCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 480px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  img {
    max-width: 200px;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 150px;
    }

    @media (max-width: 480px) {
      max-width: 130px;
    }
  }

  h3 {
    font-size: 18px;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.mainNeutral};
    max-width: 156px;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export default MemberCardStyled;
