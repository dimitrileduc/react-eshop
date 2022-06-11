import React from "react";

import ProfileForm from "../../UI/organisms/ProfileForm";
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

function Account(user) {
    console.log(user.userCurrent);

    return <ProfileForm />;
}

export default Account;

/*
<MainContainer>
                <Container>
                    <div>
                        <img src={user.userCurrent.picture} alt="profile pic" />
                        <h2>{user.userCurrent.name}</h2>
                        <p>{user.userCurrent.email}</p>
                    </div>
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

            */
