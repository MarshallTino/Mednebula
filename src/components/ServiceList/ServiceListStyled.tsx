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
  
  .services-list__spacer{
    margin-top: 20px;
    width: 100%;
    border-bottom: 2px solid #000000};
`;

export default ServiceListStyled;
