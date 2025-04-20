import { SolutionItemContainer, IconContainer, Title, Description, AnimatedIcon } from './SolutionItemStyled';

// Export the interface
export interface SolutionItemProps {
    image: string;
    title: string;
    description: string;
}

const SolutionItem = ({ image, title, description }: SolutionItemProps) => {
    return (
        <SolutionItemContainer>
            <IconContainer className="icon-container">
                <AnimatedIcon>
                    <img src={image} alt={title} />
                </AnimatedIcon>
            </IconContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </SolutionItemContainer>
    );
};

export default SolutionItem;
