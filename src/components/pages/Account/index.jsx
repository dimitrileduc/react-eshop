import React from "react";
import {
    Container,
    ContainerPersonnal,
    ContainerFirstName,
    ContainerLastName,
    ContainerBirth,
    ContainerPhone,
    ContainerButton,
    ContainerTitle,
    MainContainer,
    Title,
} from "./styles";

function Account() {
    return (
        <>
            <MainContainer>
                <Container>
                    <ContainerPersonnal>
                        <ContainerTitle>
                            <Title>Personnal informations</Title>
                        </ContainerTitle>
                        <ContainerFirstName>FirstN</ContainerFirstName>
                        <ContainerLastName>LastN</ContainerLastName>
                        <ContainerBirth>Birthdate</ContainerBirth>
                        <ContainerPhone>Phone</ContainerPhone>
                        <ContainerButton>Button</ContainerButton>
                    </ContainerPersonnal>
                </Container>
            </MainContainer>
        </>
    );
}

export default Account;
