import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    //border: 1px green dashed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "ContainerNameAdresse ContainerNameAdresse"
        "ContainerInfos ContainerInfos"
        "ContainerButtonEdit ContainerButtonDelete";
`;

export const ContainerNameAdresse = styled.div`
    justify-self: start;
    grid-area: ContainerNameAdresse;
    font-weight: 600;
`;

export const ContainerInfos = styled.div`
    justify-self: start;
    grid-area: ContainerInfos;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ContainerButtonEdit = styled.div`
    justify-self: start;
    align-self: end;
    grid-area: ContainerButtonEdit;

    all: unset;
    cursor: pointer;
    color: white;

    width: 25%;
    color: black;
    background-color: white;
    border-bottom: 1px lightgray solid;
    padding: 2px;

    :hover {
        border-bottom: 1px black solid;
    }
`;

export const ContainerButtonDelete = styled.div`
    justify-self: end;
    align-self: end;
    grid-area: ContainerButtonDelete;
`;

export const FieldAdressInfos = styled.div`
    margin-top: 5px;
    opacity: 0.6;
`;

export const Line = styled.div`
    margin-top: 5px;
    height: 1px;
    width: 10vw;
    background-color: lightgray;
`;
