import styled from "styled-components";

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, calc(100% / 5));

    justify-items: center;
    align-items: center;
    row-gap: 40px;

    @media (max-width: 1440px) {
        grid-template-columns: repeat(4, calc(100% / 4));
    }

    @media (max-width: 960px) {
        grid-template-columns: repeat(3, calc(100% / 3));
    }

    @media (max-width: 740px) {
        grid-template-columns: repeat(2, calc(100% / 2));
    }
    @media (max-width: 520px) {
        grid-template-columns: repeat(1, calc(100% / 1));
    }
`;
