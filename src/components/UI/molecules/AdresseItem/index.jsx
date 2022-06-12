import React from "react";

import {
    Container,
    ContainerNameAdresse,
    ContainerInfos,
    ContainerButtonEdit,
    ContainerButtonDelete,
} from "./styles";

function AdresseItem({adress}) {
    return (
        <Container>
            <ContainerNameAdresse>name</ContainerNameAdresse>
            <ContainerInfos>adresse</ContainerInfos>
            <ContainerButtonEdit>edit</ContainerButtonEdit>
            <ContainerButtonDelete>delete</ContainerButtonDelete>
        </Container>
    );
}

export default AdresseItem;
