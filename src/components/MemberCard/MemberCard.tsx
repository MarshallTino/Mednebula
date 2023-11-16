import MemberCardStyled from "./MemberCardStyled";

type MemberCardProps = {
    name: string;
    role: string;
    image: string;
};

const MemberCard = ({ 
  name, 
  role,
  image
}: MemberCardProps): JSX.Element => {
    return (
        <MemberCardStyled>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{role}</p>
        </MemberCardStyled>
    );
};

export default MemberCard;
export type { MemberCardProps };
