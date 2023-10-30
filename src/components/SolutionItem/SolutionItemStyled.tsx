import styled from 'styled-components';

const SolutionItemStyled = styled.div`
    text-align: center;
    width: 300px;
    margin: 20px;

    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .image {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.colors.mainNeutral};
        object-fit: cover;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
    }

    .description {
        font-size: 1rem;
    }
`;

export default SolutionItemStyled;
