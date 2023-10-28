import styled from 'styled-components';

const SolutionItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid green;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .description {
        font-size: 1rem;
    }
`;

export default SolutionItemStyled;
