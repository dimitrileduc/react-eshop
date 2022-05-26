import styled from "styled-components";

export const ContainerStyled = styled.div`
    padding-top: 40px;
    border-top: 1px solid lightgrey;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    gap: 20px 40px;
    grid-template-areas:
        "about store suscribe"
        "aboutContent storeContent suscribeContent";
`;

export const AboutContainer = styled.div`
    justify-self: start;
    grid-area: about;
`;

export const StoreContainer = styled.div`
    justify-self: start;
    grid-area: store;
`;

export const SuscribeContainer = styled.div`
    justify-self: start;
    grid-area: suscribe;
`;

export const AboutContent = styled.div`
    justify-self: start;

    grid-area: aboutContent;
`;

export const StoreContent = styled.div`
    justify-self: start;
    grid-area: storeContent;
`;

export const SuscribeContent = styled.div`
    justify-self: end;
    grid-area: suscribeContent;
`;

export const TitleSectionFooter = styled.h4`
    flex-shrink: 0;

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
