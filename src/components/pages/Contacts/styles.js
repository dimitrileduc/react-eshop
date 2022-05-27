import styled from "styled-components";

export const ContainerPage = styled.div`
    padding-top: 120px;
    display: flex;
    justify-content: center;
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
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "form map";
    justify-self: center;
    grid-area: content;
`;

export const ContainerForm = styled.div`
    justify-self: end;
    grid-area: form;
`;

export const ContainerMap = styled.div`
    justify-self: start;
    grid-area: map;
`;

export const ContainerButton = styled.div`
    justify-self: start;
    grid-area: button;
`;
