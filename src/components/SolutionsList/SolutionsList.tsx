import SolutionItem, { SolutionItemProps } from '../SolutionItem/SolutionItem';
import SolutionsListStyled from './SolutionsListStyled';

interface SolutionsListProps {
    solutions: SolutionItemProps[];
}

const SolutionsList = ({ 
    solutions 
}: SolutionsListProps): JSX.Element => {
    return (
        <SolutionsListStyled>
            {solutions.map((solution) => (
                <SolutionItem key={solution.image} {...solution} />
            ))}
        </SolutionsListStyled>
    );
};

export default SolutionsList;