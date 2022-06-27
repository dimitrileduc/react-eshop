import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "Products rightBox ";
    border-bottom: 1px solid black;
`;

export const RightBox = styled.div`
    grid-area: rightBox;
    border-left: 1px solid black;
`;

export const ProductsContainer = styled.div`
    grid-area: Products;
    display: inline-flex;
    overflow-x: auto;
    gap: 40px;
    margin: 20px;
    margin-right: 0px;
`;

export const Text = styled.div`
    margin-top: 20px;
    padding-left: 80px;

    font-size: 36px;
    transform: rotate(90deg);
    white-space: nowrap;

    font-weight: 500;
    letter-spacing: 0.05em;
    font-family: "Lato", sans-serif;
`;
