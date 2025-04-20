import styled from "styled-components";

const SolutionsListStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .solutions-list__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
    color: ${props => props.theme.colors.mainDark};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${props => props.theme.colors.accent};
      border-radius: 2px;
    }
  }
  
  .solutions-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
  }
`;

export default SolutionsListStyled;
