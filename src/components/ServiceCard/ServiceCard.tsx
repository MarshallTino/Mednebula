import React from "react";
import ServiceCardStyled from "./ServiceCardStyled";

interface ServiceCardProps {
  color: string;
  title: string;
  description: string;
  image: string;
  imageClassname: string;
  route?: string;
}

export const ServiceCard = ({
  color,
  description,
  title,
  image,
  imageClassname,
  route: link,
}: ServiceCardProps) => {
  return (
    <ServiceCardStyled
      className="service"
      onClick={() => link && (window.location.href = link)}
    >
      {color === "blue" ? (
        <>
          <img className="service_image" src={image} alt="service" />
          <div className="service__container blue">
            <h2 className="service__title">{title}</h2>
            <p className="service__description">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="service__container white">
            <h2 className="service__title white">{title}</h2>
            <p className="service__description white">{description}</p>
          </div>
          <img className="service_image" src={image} alt="service" />
        </>
      )}
    </ServiceCardStyled>
  );
};

export default ServiceCard;
