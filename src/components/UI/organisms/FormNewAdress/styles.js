/*

  ContainerForm,
    ContainerAdressName,
    ContainerDoorName,
    ContainerStreet,
    ContainerCp,
    ContainerCity,
    ContainerCountry,
    ContainerButton,


    */

import styled from "styled-components";

export const ContainerForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "ContainerAdressName ContainerDoorName"
        "ContainerStreet ContainerCp"
        "ContainerCity ContainerCountry"
        "ContainerButton ContainerButton";
`;

export const ContainerAdressName = styled.div`
    justify-self: end;
    grid-area: ContainerAdressName;
`;

export const ContainerDoorName = styled.div`
    justify-self: start;
    grid-area: ContainerDoorName;
`;

export const ContainerStreet = styled.div`
    justify-self: end;
    grid-area: ContainerStreet;
`;

export const ContainerCp = styled.div`
    justify-self: start;
    grid-area: ContainerCp;
`;

export const ContainerCity = styled.div`
    justify-self: end;
    grid-area: ContainerCity;
`;

export const ContainerCountry = styled.div`
    justify-self: start;
    grid-area: ContainerCountry;
`;

export const ContainerButton = styled.div`
    justify-self: center;
    grid-area: ContainerButton;
    margin-top: 20px;
`;

export const InputField = styled.input`
    margin: 10px;
    width: 250px;
    height: 35px;

    padding-left: 10px;

    border: 0.5px gray solid;
    border-radius: 5px;

    font-size: 13px;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 2px;
    border: 1px black solid;

    :hover {
        border: 1px lightgrey solid;
        background-color: white;
        color: black;
    }

    :focus {
        outline: 1px black solid;
    }
`;
