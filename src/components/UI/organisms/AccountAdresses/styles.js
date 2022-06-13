import styled from "styled-components";

export const ContainerMargin = styled.div`
    margin: 20px;
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
`;
export const SubText = styled.div`
    margin-top: 10px;
    font-size: 14px;
`;

export const ContainerAdresses = styled.div`
    display: grid;
    grid-template-columns: repeat(3, calc(80% / 3));

    row-gap: 20px;
    column-gap: 20px;

    align-content: space-around;
    justify-content: space-between;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;
    color: white;
    background-color: black;
    padding: 10px;
    border: 1px black solid;

    :hover {
        color: black;
        background-color: white;
        border: 1px lightgray solid;
    }
`;

export const ContainerButton = styled.div`
    margin-top: 40px;
    font-size: 14px;
`;
