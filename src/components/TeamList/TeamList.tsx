import MemberCard, { MemberCardProps } from "../MemberCard/MemberCard";
import TeamListStyled from "./TeamListStyled";

interface TeamListProps {
  members: MemberCardProps[];
}

const TeamList = ({
  members
}: TeamListProps) => {
  return (
    <TeamListStyled>
      <h1 className="team__title">Nuestro Equipo</h1>
      <div className="team__list">
        {members.map((member) => (
          <MemberCard {...member} />
        ))}
      </div>
    </TeamListStyled>
  );
};

export default TeamList;
