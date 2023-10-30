import SolutionItemStyled from './SolutionItemStyled';

interface  SolutionItemProps {
    image: string;
    title: string;
    description: string;
}

export const SolutionItem = ({ 
    image, 
    title, 
    description 
}:  SolutionItemProps): JSX.Element => {
    return (
        <SolutionItemStyled>
            <div className="image-container">
                <img
                    src={image}
                    alt={title}
                    className="image"
                />
            </div>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </SolutionItemStyled>
    );
};

export default SolutionItem;
export type { SolutionItemProps };
