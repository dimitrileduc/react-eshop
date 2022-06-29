import styled, {css} from "styled-components";
import {Field} from "formik";

export const ContainerPage = styled.div`
    padding-top: 125px;
    display: flex;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 80px;
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
    margin-bottom: 40px;
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
    border: 1px lightgray solid;

    width: 100%;
    min-width: 30vw;
    overflow: hidden;
    //height: 400px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    transition: all 0.5s ease;

    :hover {
        filter: grayscale(0%);
    }

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

    color: #000000;
    font-size: 36px;
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

    color: #000000;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 1.7;
    text-align: center;
`;

export const ContainerContact = styled.div`
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px 40px;
    grid-template-areas:
        "Support MailSupport"
        "Partnership MailPartnership"
        "Jobs MailJobs"
        "Return MailReturn"
        "Special MailSpecial";
`;

export const Support = styled.div`
    justify-self: start;
    grid-area: Support;
`;

export const Partnership = styled.div`
    justify-self: start;
    grid-area: Partnership;
`;

export const Jobs = styled.div`
    justify-self: start;
    grid-area: Jobs;
`;

export const Return = styled.div`
    justify-self: start;
    grid-area: Return;
`;

export const Special = styled.div`
    justify-self: start;
    grid-area: Special;
`;

export const MailSupport = styled.div`
    justify-self: start;
    grid-area: MailSupport;
`;

export const MailPartnership = styled.div`
    justify-self: start;
    grid-area: MailPartnership;
`;

export const MailJobs = styled.div`
    justify-self: start;
    grid-area: MailJobs;
`;

export const MailReturn = styled.div`
    justify-self: start;
    grid-area: MailReturn;
`;

export const MailSpecial = styled.div`
    justify-self: start;
    grid-area: MailSpecial;
`;
