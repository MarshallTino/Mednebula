import { MemberCardStyled, MemberImage, MemberInfo } from "./MemberCardStyled";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export type MemberCardProps = {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    github?: string;
};

const MemberCard = ({ name, role, image, linkedin, github }: MemberCardProps) => (
  <MemberCardStyled>
    <MemberImage src={image} alt={name} />
    <MemberInfo>
      <h3>{name}</h3>
      <p>{role}</p>
      {(linkedin || github) && (
        <div className="social-links">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
        </div>
      )}
    </MemberInfo>
  </MemberCardStyled>
);

export default MemberCard;
