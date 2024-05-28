import SolutionItem, { SolutionItemProps } from '../SolutionItem/SolutionItem';
import SolutionsListStyled from './SolutionsListStyled';

interface SolutionsListProps {
  solutions: SolutionItemProps[];
  id?: string; // Add this line
}

const SolutionsList = ({ 
  solutions,
  id, // Add this line
}: SolutionsListProps): JSX.Element => {
  return (
    <SolutionsListStyled id={id}> {/* Add the id prop here */}
      {solutions.map((solution) => (
        <SolutionItem key={solution.image} {...solution} />
      ))}
    </SolutionsListStyled>
  );
};

export default SolutionsList;
