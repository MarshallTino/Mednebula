import TeamListStyled from "./TeamListStyled";
import MemberCard, { MemberCardProps } from "../MemberCard/MemberCard";

interface TeamListProps {
  members: MemberCardProps[];
}

const TeamList = ({ members }: TeamListProps) => (
  <TeamListStyled>
    <div className="team__list">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  </TeamListStyled>
);

export default TeamList;
