import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  .team__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin: 20px;
    
    
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    @media (max-width: 320px) {
      grid-template-columns: 1fr;
    }
  }
`;
