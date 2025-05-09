import styled from "styled-components";

const SolutionsListStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
    display: grid;
    margin: 0 auto;
    padding: 0 20px;
    grid-template-columns: repeat(2, minmax(280px, 400px));
    gap: 40px;
    justify-content: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 15px;
      gap: 30px;
    }
  }

  .solution-item {
    text-align: center;
    padding: 10px;
    overflow: hidden;
  }
`;

export default SolutionsListStyled;
