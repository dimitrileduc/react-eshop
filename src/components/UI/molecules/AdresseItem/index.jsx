import React from "react";

import {
    Container,
    ContainerNameAdresse,
    ContainerInfos,
    ContainerButtonEdit,
    ContainerButtonDelete,
    FieldAdressInfos,
    Line,
} from "./styles";

function AdresseItem({adress}) {
    return (
        <Container>
            <ContainerNameAdresse>
                {adress.adressName}
                <Line></Line>
            </ContainerNameAdresse>
            <ContainerInfos>
                <FieldAdressInfos>{adress.name}</FieldAdressInfos>
                <FieldAdressInfos>{adress.street}</FieldAdressInfos>
                <FieldAdressInfos>{adress.cp}</FieldAdressInfos>
                <FieldAdressInfos>{adress.city}</FieldAdressInfos>
                <FieldAdressInfos>{adress.country}</FieldAdressInfos>
            </ContainerInfos>
            <ContainerButtonEdit>edit</ContainerButtonEdit>
            <ContainerButtonDelete></ContainerButtonDelete>
        </Container>
    );
}

export default AdresseItem;
