import styled from 'styled-components';

const ContentContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.mainLight};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        width: 90%;
    }
`;

interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps): JSX.Element => {
    return <ContentContainer>{children}</ContentContainer>;
};

export default Content;