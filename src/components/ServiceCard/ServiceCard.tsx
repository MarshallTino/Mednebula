import ServiceDescriptionStyled from "./ServiceCardStyled";

interface ServiceCardProps {
  color: string;
  title: string;
  description: string;
  image: string;
  imageClassname: string;
}

export const ServiceCard = ({
  color,
  description,
  title,
  image,
  imageClassname,
}: ServiceCardProps) => {
  if (color === "blue") {
    return (
      <ServiceDescriptionStyled className="service">
        <img className="service_image" src={image} alt="service" width="900" height="450" />
        <div className="service__container blue">
          <h2 className="service__title ">{title}</h2>
          <p className="service__description ">{description}</p>
        </div>
      </ServiceDescriptionStyled>
    );
  } else {
    return (
      <ServiceDescriptionStyled className="service">
        <div className="service__container white">
          <h2 className="service__title white">{title}</h2>
          <p className="service__description white">{description}</p>
        </div>
        <img className="service_image" src={image} alt="service" width="900" height="450" />
      </ServiceDescriptionStyled>
    );
  }
};

export default ServiceCard;
