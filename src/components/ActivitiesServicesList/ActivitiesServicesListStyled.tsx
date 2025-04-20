import styled from "styled-components";

export const ActivitiesServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  width: 100%;
  
  @media (max-width: 650px) {
    grid-template-columns: 1fr; // Single column on small devices
  }
`;

export const ActivitiesServiceItem = styled.div`
  height: 100%;
  display: flex;
  
  /* Since we use ServiceCardContainer inside, ensure it takes full size */
  & > div {
    width: 100%;
    margin-bottom: 0; // Override margin from ServiceCardContainer
  }
`;
