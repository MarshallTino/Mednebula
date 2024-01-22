import { styled } from "styled-components";

const ServiceListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 50px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
  background-color: #ffffff;

  .services-list__spacer {
    margin: 20px 0px 20px;
    width: 100%;
    border-bottom: 2px solid #000000;
  }

  @media (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    gap: 20px;
  }
  @media (max-width: 768px) {
    .services-list :nth-child(2),
    .services-list :nth-child(4) {
      flex-direction: column-reverse;
    }
  }
`;

export default ServiceListStyled;
