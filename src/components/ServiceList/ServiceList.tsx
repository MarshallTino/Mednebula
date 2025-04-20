// src/components/ServiceList/ServiceList.tsx
import { Services } from "../../Data/Services";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceListStyled from "./ServiceListStyled";

const ServiceList = (): JSX.Element => {
  return (
    <ServiceListStyled>
      <div className="services-grid">
        {Services.map((service) => (
          <div key={service.title} className="service-card-wrapper">
            {/* Pass only the required props explicitly */}
            <ServiceCard 
              image={service.image}
              title={service.title}
              description={service.description}
              route={service.route} 
            />
          </div>
        ))}
      </div>
      <div className="services-list__spacer"></div>
    </ServiceListStyled>
  );
};

export default ServiceList;
