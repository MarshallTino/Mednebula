import styled from 'styled-components';

const MemberCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    max-width: 200px;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    font-size: 18px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.mainNeutral};
  }
`;

export default MemberCardStyled;
