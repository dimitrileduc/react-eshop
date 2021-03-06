import React, {useState} from "react";
import {
    ContainerMargin,
    Title,
    SubText,
    ContainerAdresses,
    Button,
    ContainerButton,
} from "./styles";
import uuid from "react-uuid";

import AdresseItem from "../../molecules/AdresseItem";
import FormNewAdress from "../FormNewAdress";

import Modal from "../Modal";
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
            adressName: "Work",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
        {
            id: uuid(),
            adressName: "Family",
            name: "Louis Durant",
            street: "rue du Mayeur 46",
            cp: "4000",
            city: "Saint Nicolas",
            country: "Belgium",
        },
    ]);

    const [showModal, setShowModal] = useState(false);

    const rendAdresses = adresses.map(function (adress, idx) {
        return <AdresseItem key={adress.id} adress={adress} />;
    });

    return (
        <>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="New adress"
                content={FormNewAdress}
            />
            <ContainerMargin>
                <Title>My Adresses</Title>
                <SubText>
                    Please find your previous and current addresses here
                </SubText>
                <ContainerAdresses>{rendAdresses}</ContainerAdresses>
                <ContainerButton>
                    <Button onClick={() => setShowModal(true)}>
                        Add new adress
                    </Button>
                </ContainerButton>
            </ContainerMargin>
        </>
    );
}

export default AccountAdresses;
