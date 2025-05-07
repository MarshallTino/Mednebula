import BannerStyled from "./BannerStyled";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonType } from "../Button/ButtonStyled";

export interface BannerProps {
  image: string;
  buttonPosition: "left" | "right";
  buttonText: string;
  buttonLink?: string;
  message: string;
  subtitle?: string;
}

export const Banner = ({
  image,
  buttonPosition,
  buttonText,
  buttonLink,
  message,
  subtitle = "Apoyando y facilitando la vida de personas con diversidad funcional a través de soluciones innovadoras",
}: BannerProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (buttonLink) navigate(buttonLink);
  };
  return (
    <BannerStyled $backgroundImage={image} $buttonPosition={buttonPosition} id="main-content">
      <div className="banner-content">
        <h1 className="banner__title">{message}</h1>
        {subtitle && <p className="banner__subtitle">{subtitle}</p>}
        <div className="button-container">
          <Button
            className="landingpage__button"
            text={buttonText}
            disabled={false}
            action={handleClick}
            buttonType={ButtonType.DEFAULT}
          />
        </div>
      </div>
      <div className="banner-image">
        <img 
          src={image}
          alt="Persona con diversidad funcional recibiendo apoyo" 
          className="hero-image"
        />
      </div>
    </BannerStyled>
  );
};
export default Banner;
