import React, {useState} from "react";
import {ContainerMargin, Title, SubText, ContainerAdresses} from "./styles";
import uuid from "react-uuid";

import AdresseItem from "../../molecules/AdresseItem";

function AccountAdresses() {
    const [adresses, setAdresse] = useState([
        {
            id: uuid(),
            adressName: "Home",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
        {
            id: uuid(),
            adressName: "Home",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
        {
            id: uuid(),
            adressName: "Home",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
        {
            id: uuid(),
            adressName: "Home",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
    ]);

    adresses.map(function (adress, idx) {
        console.log(adress.adressName);
    });

    const rendAdresses = adresses.map(function (adress, idx) {
        return <AdresseItem key={adress.id} adress={adress} />;
    });

    return (
        <ContainerMargin>
            <Title>My Adresses</Title>
            <SubText>
                Please find your previous and current addresses here
            </SubText>
            <ContainerAdresses>{rendAdresses}</ContainerAdresses>
        </ContainerMargin>
    );
}

export default AccountAdresses;
