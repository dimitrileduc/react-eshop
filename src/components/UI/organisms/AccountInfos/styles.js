/*
 ContainerForm,
    ContainerLastName,
    ContainerFirstName,
    ContainerBirthday,
    ContainerEmail,
    ContainerStreet,
    ContainerPhone,
    ContainerCityCp,
    ContainerCountry
    */

import styled from "styled-components";

// grid form layout

export const ContainerForm = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 40% 40%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "ContainerFirstName ContainerLastName"
        "ContainerBirthday ContainerEmail"
        "ContainerStreet ContainerPhone"
        "ContainerCityCp ContainerCountry";
`;

export const ContainerFirstName = styled.div`
    justify-self: start;
    grid-area: ContainerFirstName;
`;

export const ContainerLastName = styled.div`
    justify-self: start;
    grid-area: ContainerLastName;
`;

export const ContainerBirthday = styled.div`
    justify-self: start;
    grid-area: ContainerBirthday;
`;

export const ContainerEmail = styled.div`
    justify-self: start;
    grid-area: ContainerEmail;
`;

export const ContainerStreet = styled.div`
    justify-self: start;
    grid-area: ContainerStreet;
`;

export const ContainerPhone = styled.div`
    justify-self: start;
    grid-area: ContainerPhone;
`;

export const ContainerCityCp = styled.div`
    justify-self: start;
    grid-area: ContainerCityCp;
    display: flex;
`;

export const ContainerCountry = styled.div`
    justify-self: start;
    grid-area: ContainerCountry;
`;

///

export const ContainerMargin = styled.div``;

export const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
    margin: 20px;
`;
export const SubText = styled.div`
    margin-top: 10px;
    font-size: 14px;
    margin: 20px;
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
    margin: 1vw;
`;

export const InputField = styled.input`
    margin: 1vw;
    width: 20vw;
    height: 35px;

    padding-left: 10px;

    border: 0.5px gray solid;

    font-size: 13px;
`;

export const InputField2 = styled.input`
    margin: 1vw;
    width: 9vw;
    margin-right: 0;
    height: 35px;

    padding-left: 10px;

    border: 0.5px gray solid;

    font-size: 13px;
`;
