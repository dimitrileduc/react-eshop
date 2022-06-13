import React from "react";
import {
    ContainerMargin,
    Title,
    SubText,
    ContainerButton,
    Button,
    ContainerForm,
    ContainerLastName,
    ContainerFirstName,
    ContainerBirthday,
    ContainerEmail,
    ContainerStreet,
    ContainerPhone,
    ContainerCityCp,
    ContainerCountry,
    InputField,
    InputField2,
} from "./styles";

function AccountInfos() {
    return (
        <ContainerMargin>
            <Title>My info</Title>
            <SubText>Please fill your infos</SubText>

            <ContainerForm>
                <ContainerFirstName>
                    <InputField placeholder="First Name" />
                </ContainerFirstName>
                <ContainerLastName>
                    <InputField placeholder="Last Name" />
                </ContainerLastName>
                <ContainerBirthday>
                    <InputField placeholder="Birthday" />
                </ContainerBirthday>
                <ContainerEmail>
                    <InputField placeholder="Email" />
                </ContainerEmail>
                <ContainerStreet>
                    <InputField placeholder="Street" />
                </ContainerStreet>
                <ContainerPhone>
                    <InputField placeholder="Phone" />
                </ContainerPhone>
                <ContainerCityCp>
                    <InputField2 placeholder="CP" />
                    <InputField2 placeholder="City" />
                </ContainerCityCp>
                <ContainerCountry>
                    <InputField placeholder="Country" />
                </ContainerCountry>
            </ContainerForm>

            <ContainerButton>
                <Button>Save</Button>
            </ContainerButton>
        </ContainerMargin>
    );
}

export default AccountInfos;
