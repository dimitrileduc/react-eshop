import styled from "styled-components";

export const ContainerMargin = styled.div`
    padding-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
    //border: 1px green dashed;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    border: 1px solid lightgray;
    grid-template-areas:
        "menuContainer ContainerMain"
        "menuContainer ContainerMain"
        "logoutContainer ContainerMain";
`;
export const ContainerMenu = styled.div`
    justify-self: start;
    align-self: start;
    grid-area: menuContainer;
    margin-left: 20px;
    margin-top: 20px;
`;
export const ContainerLogout = styled.div`
    justify-self: start;
    align-self: end;
    grid-area: logoutContainer;
    margin-bottom: 20px;
    margin-left: 20px;
`;
export const ContainerMain = styled.div`
    justify-self: start;
    align-self: start;
    grid-area: ContainerMain;
    width: 100%;
    height: 100%;
    border-left: 1px solid lightgray;
`;
