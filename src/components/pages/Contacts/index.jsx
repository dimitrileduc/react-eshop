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
    ContainerPage,
    HeaderContainer,
    TextContainer,
    H1,
    Text,
    ContainerContact,
    Support,
    Partnership,
    Jobs,
    Return,
    Special,
    MailSupport,
    MailPartnership,
    MailJobs,
    MailReturn,
    MailSpecial,
} from "./styles";

function Contact({pageName}) {
    return (
        <>
            <ContainerPage>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                    <HeaderContainer>
                        <H1>Get in touch</H1>
                    </HeaderContainer>
                    <TextContainer>
                        <Text>
                            Our customer service is always prepared to support
                            you. How can we help you today?
                        </Text>
                    </TextContainer>
                    <ContainerContact>
                        <Support>Support</Support>
                        <Partnership>Partnership</Partnership>
                        <Jobs>Jobs opportunities</Jobs>
                        <Return>Return & Issues</Return>
                        <Special>Special Requires</Special>
                        <MailSupport>support@store.com</MailSupport>
                        <MailPartnership>partnership@store.com</MailPartnership>
                        <MailJobs>jobs@store.com</MailJobs>
                        <MailReturn>returns@store.com</MailReturn>
                        <MailSpecial>requires@store.com</MailSpecial>
                    </ContainerContact>
                </motion.div>
            </ContainerPage>
        </>
    );
}

export default Contact;
