import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "ContainerNameAdresse ContainerNameAdresse"
        "ContainerInfos ContainerInfos"
        "ContainerButtonEdit ContainerButtonDelete";
`;

export const ContainerNameAdresse = styled.div`
    justify-self: start;
    grid-area: ContainerNameAdresse;
`;

export const ContainerInfos = styled.div`
    justify-self: start;
    grid-area: ContainerInfos;
`;

export const ContainerButtonEdit = styled.div`
    justify-self: start;
    align-self: end;
    grid-area: ContainerButtonEdit;
`;

export const ContainerButtonDelete = styled.div`
    justify-self: end;
    align-self: end;
    grid-area: ContainerButtonDelete;
`;
