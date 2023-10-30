import { Services } from "../../Data/Services";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServiceListStyled from "./ServiceListStyled";

const ServiceList = (): JSX.Element => {
  const services = Services;

  return (
    <ServiceListStyled className="services-list">
      {services.map((service) => (
        <ServiceCard {...service} />
      ))}
    </ServiceListStyled>
  );
};

export default ServiceList;
