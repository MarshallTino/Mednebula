import { styled } from "styled-components";

const ServiceCardStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 450px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${(props) => props.theme.colors.mainLight};
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.tertiary};
  box-shadow: 4px 0px 125px 50px rgba(0, 0, 0, 0.2);

  .service__container {
    padding: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }

  .service__title {
    width: 100%;
    font-size: 50px;
    border-bottom: 8px solid ${(props) => props.theme.colors.mainNeutral};
  }

  .service__description {
    width: 100%;
  }

  .service_image {
    object-fit: cover;
  }

  .white {
    background-color: #dfdfdf;
    color: ${(props) => props.theme.colors.mainDark};
    align-items: flex-end;
  }
  .blue {
    background: linear-gradient(
      180deg,
      #0071bc 0.03%,
      #0071bc 70.82%,
      #003a61 99.45%
    );
    align-items: flex-start;
  }

  // Media queries for mobile version
  @media (max-width: 768px) {
    .services-list :nth-child(2),
    .services-list :nth-child(4) {
      flex-direction: column-reverse;
      font-size: 20px;
    }

    flex-direction: column;
    .service__container {
      padding: 20px;
    }
    .service__title {
      font-size: 30px;
    }
    .service__description {
      font-size: 20px;
    }
    .white .white,
    .blue {
      align-items: center;
    }
    .service_image {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ServiceCardStyled;
