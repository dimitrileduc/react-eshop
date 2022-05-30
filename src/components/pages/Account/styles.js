import styled from "styled-components";

export const MainContainer = styled.div`
    padding-top: 125px;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;

    justify-content: center;
    margin: 0 auto;
`;

export const Container = styled.div`
    justify-items: center;
`;

export const ContainerPersonnal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        "titleContainer ."
        "firstName lastName"
        "birth phone"
        "button .";
`;

export const ContainerTitle = styled.div`
    grid-area: titleContainer;
`;

export const ContainerFirstName = styled.div`
    grid-area: firstName;
`;

export const ContainerLastName = styled.div`
    grid-area: lastName;
`;

export const ContainerBirth = styled.div`
    grid-area: birth;
`;

export const ContainerPhone = styled.div`
    grid-area: phone;
`;

export const ContainerButton = styled.div`
    grid-area: button;
`;

export const Title = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    font-weight: 400;

    opacity: 0.8;
    font-family: "Inter", sans-serif;
    color: #000000;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 1.7;
    text-align: left;
`;
