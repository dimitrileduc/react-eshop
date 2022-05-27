import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 33% 33% 33%;
    gap: 0px 0px;
    grid-template-areas:
        "Product1"
        "Product2"
        "Product3";
`;

export const Product1 = styled.div`
    grid-area: Product1;
`;

export const Product2 = styled.div`
    grid-area: Product2;
`;

export const Product3 = styled.div`
    grid-area: Product3;
`;
