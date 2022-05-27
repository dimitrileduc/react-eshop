import React from "react";

import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

import ImageJpg from "../../assets/map/map.jpg";
import ImageWebp from "../../assets/map/map.webp";

import Image from "../../UI/atoms/Image";

import {
    ContainerForm,
    ContainerPage,
    ContainerGrid,
    HeaderContainer,
    TextContainer,
    ContentContainer,
    ContainerMap,
    ContainerButton,
    H1,
    Text,
    ContainerFirstName,
    ContainerLastName,
    ContainerEmail,
    ContainerMessage,
    Input,
    TextArea,
    InputEmail,
    InputFirstName,
    InputLastName,
} from "./styles";

function Contact() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(5, "trop petit")
            .max(50, "trop long!")
            .required("Ce champ est obligatoire"),
        lastName: Yup.string()
            .min(2, "trop petit")
            .max(10, "trop long!")
            .required("Ce champ est obligatoire"),
        email: Yup.string()
            .email("email invalide")
            .required("l'email est obligatoire"),
        message: Yup.string()
            .required("Sorry, this is required")
            .max(300, "Sorry, message is too long"),
    });
    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <ContainerPage>
            <ContainerGrid>
                <HeaderContainer>
                    <H1>Contact</H1>
                </HeaderContainer>
                <TextContainer>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </Text>
                </TextContainer>
                <ContentContainer>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}>
                        {({resetForm}) => (
                            <Form>
                                <ContainerForm>
                                    <ContainerFirstName>
                                        <label htmlFor="firstName">
                                            First Name:
                                        </label>
                                        <InputFirstName
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="small"
                                        />
                                    </ContainerFirstName>
                                    <ContainerLastName>
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <InputLastName
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="small"
                                        />
                                    </ContainerLastName>
                                    <ContainerEmail>
                                        <label htmlFor="email">Email:</label>
                                        <InputEmail
                                            type="email"
                                            id="email"
                                            name="email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="small"
                                        />
                                    </ContainerEmail>
                                    <ContainerMessage>
                                        <label htmlFor="message">Message</label>
                                        <TextArea
                                            type="text"
                                            id="message"
                                            name="message"
                                            component="textarea"
                                        />

                                        <ErrorMessage
                                            name="message"
                                            component="small"
                                        />

                                        <div>
                                            <button type="submit">
                                                S'inscrire
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resetForm}>
                                                Annuler
                                            </button>
                                        </div>
                                    </ContainerMessage>
                                </ContainerForm>
                            </Form>
                        )}
                    </Formik>

                    <ContainerMap>Map</ContainerMap>
                </ContentContainer>
            </ContainerGrid>
        </ContainerPage>
    );
}

export default Contact;
