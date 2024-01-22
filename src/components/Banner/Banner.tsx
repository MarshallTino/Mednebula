import BannerStyled from "./BannerStyled";
import Button from "../Button/Button";

interface BannerProps {
  image: string;
  buttonPosition: "left" | "right";
  buttonText: string;
  message: string;
}

export const Banner = ({
  image,
  buttonPosition,
  buttonText,
  message,
}: BannerProps): JSX.Element => {
  return (
    <BannerStyled backgroundImage={image} buttonPosition={buttonPosition}>
      <div className={`button ${buttonPosition}`}>
        <Button
          className="landingpage__button"
          text={buttonText}
          disabled={false}
        />
      </div>
      <h2 className="banner__title">{message}</h2>
    </BannerStyled>
  );
};
export default Banner;
