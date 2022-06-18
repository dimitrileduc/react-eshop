import styled from "styled-components";

export const ContainerMargin = styled.div`
    padding-top: 125px;
    margin-left: 40px;
    margin-right: 40px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    gap: 0px 40px;
    grid-template-areas: "ContainerSignIn ContainerSignUp";
    //border: 1px green dashed;

    padding-left: 40px;
    padding-right: 40px;

    @media (max-width: 780px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "ContainerSignIn"
            " ContainerSignUp";
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export const ContainerSignIn = styled.div`
    justify-self: right;

    grid-area: ContainerSignIn;
    //border: 1px red dashed;
    width: 100%;
`;

export const ContainerSignUp = styled.div`
    justify-self: left;

    grid-area: ContainerSignUp;
    //border: 1px red dashed;
    width: 100%;
`;
