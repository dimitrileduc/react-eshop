import styled from "styled-components";

export const ContainerList = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4));
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    row-gap: 40px;

    @media (max-width: 960px) {
        grid-template-columns: repeat(3, calc(100% / 3));
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, calc(100% / 2));
    }
    @media (max-width: 400px) {
        grid-template-columns: repeat(1, calc(100% / 1));
    }
`;
