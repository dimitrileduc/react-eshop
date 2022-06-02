import styled from "styled-components";

export const ContainerCart = styled.div`
    width: 385px;
    height: auto;
    border: dashed lightgrey 1px;
    margin-left: -385px;
    position: relative;
    margin-top: auto;
    padding-top: 50px;
`;

export const ContainerBorder = styled.div`
    border: solid lightgrey 1px;
    background-color: white;
`;

export const ContainerGrid = styled.div`
    border: solid grey 1px;

    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
`;

export const TitleCart = styled.div`
    text-align: center;
    font-weight: 600;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    opacity: 0.7;
    padding-top: 10px;
    //padding-bottom: 10px;
`;

export const ContainerProducts = styled.div`
    //padding-top: 10px;
    //padding-bottom: 10px;
`;

export const ContainerButtonsCart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "buttonLeft buttonRight";
    border-top: lightgrey 1px solid;
`;

export const ContainerButtonLeftCart = styled.div`
    justify-self: end;
    align-self: center;
    grid-area: buttonLeft;
`;

export const ContainerButtonRightCart = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: buttonRight;
`;
