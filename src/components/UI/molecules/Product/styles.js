import styled from "styled-components";

export const ContainerProduct = styled.div`
    margin-top: 85px;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
`;

export const ContainerGrid = styled.div`
    border: red solid 1px;
    display: grid;
    grid-template-columns: 40% 50% 10%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    width: 100%;

    max-width: 1440px;

    @media screen and (max-width: 992px) {
        grid-template-columns: 100%;
        grid-template-rows: auto auto auto;
    }
`;

export const ContainerImage = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 4 / 2;

    border: 1px blue solid;

    @media screen and (max-width: 992px) {
        grid-area: 1 / 1 / 2 / 2;
    }
`;

export const Label = styled.div`
    justify-self: end;
    align-self: start;
    grid-area: 1 / 1 / 2 / 2;
    border: 1px red solid;
`;

export const ContainerContent = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: 1 / 2 / 4 / 3;
    border: 1px dashed orange;

    @media screen and (max-width: 992px) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;

export const ContainerRelated = styled.div`
    grid-area: 1 / 3 / 4 / 4;

    border: 1px yellow solid;

    @media screen and (max-width: 992px) {
        grid-area: 3 / 1 / 4 / 2;
    }
`;

export const LabelStyled = styled.p`
    white-space: pre;
    overflow: visible;
    opacity: 0.8;
    font-weight: 600;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    text-transform: uppercase;

    margin-top: 10px;
    margin-right: 10px;
`;
