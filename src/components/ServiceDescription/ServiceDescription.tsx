import ServiceDescriptionStyled from "./ServiceDescriptionStyled";

interface ServiceDescriptionProps {
  color: string;
  title: string;
  description: string;
  classname: string;
}

export const ServiceDescription = ({
  color,
  description,
  title,
  classname,
}: ServiceDescriptionProps) => {
  if (color === "blue") {
    return (
      <ServiceDescriptionStyled className={classname}>
        <div className="servicedescription__container blue">
          <h2 className="servicedescription__title blue">{title}</h2>
          <p className="servicedescription__description blue">{description}</p>
        </div>
      </ServiceDescriptionStyled>
    );
  } else {
    return (
      <ServiceDescriptionStyled className={classname}>
        <div className="servicedescription__container white">
          <h2 className="servicedescription__title white">{title}</h2>
          <p className="servicedescription__description white">{description}</p>
        </div>
      </ServiceDescriptionStyled>
    );
  }
};

export default ServiceDescription;
