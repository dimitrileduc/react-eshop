import React from "react";

import {Formik, Field, Form, ErrorMessage, getIn} from "formik";
import * as Yup from "yup";
import {motion} from "framer-motion";

import ImageJpg from "../../assets/map/map.jpg";
import ImageWebp from "../../assets/map/map.webp";

import Image from "../../UI/atoms/Image";

import Map from "../../UI/atoms/Map";

import TransitionExit from "../../transitions/TransitionExit";

import InputForm from "../../UI/atoms/InputForm";

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
    Label,
    LabelFirstName,
    ButtonSend,
} from "./styles";

function Contact({pageName}) {
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
        <>
            <ContainerPage>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                    <ContainerGrid>
                        <HeaderContainer>
                            <H1>Contact</H1>
                        </HeaderContainer>
                        <TextContainer>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
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
                                                <InputForm
                                                    holder={"First Name"}
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                />
                                            </ContainerFirstName>
                                            <ContainerLastName>
                                                <InputForm
                                                    holder={"Last Name"}
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                />
                                            </ContainerLastName>
                                            <ContainerEmail>
                                                <InputForm
                                                    holder={"Email"}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                />
                                            </ContainerEmail>
                                            <ContainerMessage>
                                                <Label htmlFor="message">
                                                    Message
                                                </Label>
                                                <TextArea
                                                    type="text"
                                                    id="message"
                                                    name="message"
                                                    component="textarea"
                                                    rows="15"
                                                />
                                            </ContainerMessage>
                                        </ContainerForm>
                                        <div>
                                            <ButtonSend type="submit">
                                                Send Message
                                            </ButtonSend>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                            <ContainerMap>
                                <Map />
                            </ContainerMap>
                        </ContentContainer>
                    </ContainerGrid>
                </motion.div>
            </ContainerPage>
        </>
    );
}

export default Contact;
