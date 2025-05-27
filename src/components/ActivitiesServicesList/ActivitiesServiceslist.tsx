import { useNavigate } from "react-router-dom";
import ActivitiesServiceCard from "../ActivityServiceCard/ActivityServiceCard";
import { ActivitiesServices } from "../../Data/ActivitesServices";
import styled from "styled-components";

const ActivitiesServicesList = () => {
  const navigate = useNavigate();

  const handleServiceClick = (slug: string, service: any) => {
    navigate(`/servicios/${slug}`, { state: { service } });
  };

  return (
    <ServicesGrid>
      {ActivitiesServices.map((service) => (
        <ServiceCardWrapper key={service.id}>
          <ActivitiesServiceCard
            title={service.title}
            shortDescription={service.shortDescription}
            description={service.description}
            image={service.image}
            onClick={() => handleServiceClick(service.slug, service)}
          />
        </ServiceCardWrapper>
      ))}
    </ServicesGrid>
  );
};

export default ActivitiesServicesList;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  width: 100%;
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCardWrapper = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
