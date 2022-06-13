/*
  Container,
    ContainerLeft,
    ContainerText,
    ContainerButton,
    ContainerRight,
    */

import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
    height: auto;
    background-color: white;
`;

export const ContainerLeft = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    justify-self: stretch;
    align-self: stretch;
    grid-area: 1/1/1/1;
    width: 100%;
    height: 100%;
    font-size: 36px;

    padding-left: 40px;
    background-color: black;
    color: white;
`;

export const ContainerText = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: 1 / 1 / 2 / 2;
`;

export const ContainerButton = styled.div`
    justify-self: start;
    align-self: end;
    grid-area: 1 / 1 / 2 / 2;
`;

export const ContainerRight = styled.div`
    grid-area: 1 / 2 / 2 / 3;

    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    background-color: black;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;
    border: 1px white solid;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 40px;
    color: white;

    :hover {
        background-color: white;
        color: black;
    }
`;
