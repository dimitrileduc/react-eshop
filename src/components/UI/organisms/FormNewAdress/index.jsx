import React from "react";

import {
    ContainerForm,
    ContainerAdressName,
    ContainerDoorName,
    ContainerStreet,
    ContainerCp,
    ContainerCity,
    ContainerCountry,
    ContainerButton,
    InputField,
    Button,
} from "./styles";

import SelectCountry from "../../molecules/SelectCountry";

function FormNewAdress() {
    return (
        <ContainerForm>
            <ContainerAdressName>
                <InputField placeholder="adress name" />
            </ContainerAdressName>
            <ContainerDoorName>
                <InputField placeholder="Door name" />
            </ContainerDoorName>
            <ContainerStreet>
                <InputField placeholder="Street name" />
            </ContainerStreet>
            <ContainerCp>
                <InputField placeholder="Cp" />
            </ContainerCp>
            <ContainerCity>
                <InputField placeholder="City" />
            </ContainerCity>
            <ContainerCountry>
                <SelectCountry />
            </ContainerCountry>
            <ContainerButton>
                <Button>Add new adress</Button>
            </ContainerButton>
        </ContainerForm>
    );
}

export default FormNewAdress;
