import styled from "styled-components";

export const ServicesHeroContainer = styled.div`
  margin-top: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.blueGradient};

  @media (max-width: 768px) {
    margin-top: 16px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

export const ServicesListSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundServices};
  width: 100%;
  padding: 40px 0;
`;
