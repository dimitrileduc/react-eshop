import styled, {css} from "styled-components";
import {Field} from "formik";

export const ContainerPage = styled.div`
    padding-top: 125px;
    display: flex;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 50% auto;
    gap: 0px 0px;
    grid-template-areas:
        "header header"
        "text text"
        "content content"
        "button .";
`;

export const HeaderContainer = styled.div`
    justify-self: center;
    grid-area: header;
`;

export const TextContainer = styled.div`
    justify-self: center;
    grid-area: text;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "form map";
    justify-self: center;
    grid-area: content;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "form"
            " map";
    }
`;

export const ContainerMap = styled.div`
    justify-self: start;
    grid-area: map;
    border: 1px green solid;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const ContainerButton = styled.div`
    justify-self: start;
    grid-area: button;
`;

export const H1 = styled.p`
    white-space: pre;
    overflow: visible;
    opacity: 0.8;
    font-weight: 700;
    font-family: "Inter-Bold", "Inter", sans-serif;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
`;

export const Text = styled.p`
    padding-left: 40px;
    padding-right: 40px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;

    opacity: 0.8;
    font-family: "Inter", sans-serif;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 1.7;
    text-align: center;
`;

export const ContainerForm = styled.div`
    margin-right: 20px;
    justify-self: end;

    grid-area: form;

    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "lastName firstName"
        "email email"
        "Message Message";
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-template-areas:
            "firstName"
            "lastName"
            "email"
            "Message";
    }
`;

export const ContainerFirstName = styled.div`
    grid-area: firstName;
    width: 100%;
`;

export const ContainerLastName = styled.div`
    grid-area: lastName;
    width: 100%;
`;

export const ContainerEmail = styled.div`
    width: 100%;
    grid-area: email;
    justify-self: center;
    display: flex;
    flex-direction: column;
`;

export const ContainerMessage = styled.div`
    grid-area: Message;
    width: 100%;
    justify-self: center;
    display: flex;
    flex-direction: column;
`;

export const InputFirstName = styled(Field)`
    width: 90%;
    margin-left: 10%;
    @media screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0;
    }
`;

export const InputLastName = styled(Field)`
    width: 90%;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const InputEmail = styled(Field)`
    width: 100%;
`;

export const TextArea = styled(Field)`
    width: 100%;
`;
