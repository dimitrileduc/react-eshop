import styled from "styled-components";

export const ContainerProduct = styled.div`
    margin-top: 85px;
    display: flex;
    justify-content: center;
`;

export const ContainerGrid = styled.div`
    border: red solid 1px;
    display: grid;
    grid-template-columns: 40% 40% 20%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    width: 100%;

    max-width: 1440px;
`;

export const ContainerImage = styled.div`
    justify-self: stretch;
    align-self: stretch;
    grid-area: 1 / 1 / 4 / 2;

    border: 1px blue solid;
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
`;

export const ContainerRelated = styled.div`
    justify-self: stretch;
    align-self: stretch;
    grid-area: 1 / 3 / 4 / 4;
    height: 100%;
    border: 1px yellow solid;
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
