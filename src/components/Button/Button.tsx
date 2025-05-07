import ButtonStyled, { ButtonType } from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  text: string | number;
  action?: () => void;
  disabled: boolean;
  buttonType?: ButtonType; // New prop to specify button style type
}

const Button = ({
  className,
  text,
  action,
  disabled,
  buttonType = ButtonType.DEFAULT // Default to standard button
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled 
      onClick={action} 
      className={className} 
      disabled={disabled}
      $buttonType={buttonType}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
