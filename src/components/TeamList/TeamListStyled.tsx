import styled from "styled-components";

const TeamListStyled = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 80px;
  text-align: center;
  .team__list {
    gap: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export default TeamListStyled;
