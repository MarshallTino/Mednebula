import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  .team__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-top: 20px;
    
    @media (max-width: 768px) {
      gap: 15px;
    }
  }
`;
