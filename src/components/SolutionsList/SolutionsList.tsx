import SolutionItem, { SolutionItemProps } from '../SolutionItem/SolutionItem';
import SolutionsListStyled from './SolutionsListStyled';

interface SolutionsListProps {
  solutions: SolutionItemProps[];
  id?: string;
}

const SolutionsList = ({ solutions, id }: SolutionsListProps): JSX.Element => (
  <SolutionsListStyled id={id}>
    <div className="solutions-wrapper">
      {solutions.map((solution) => (
        <SolutionItem key={solution.image} {...solution} />
      ))}
    </div>
  </SolutionsListStyled>
);

export default SolutionsList;
