import styled from "styled-components";

export const ContainerCart = styled.div`
    width: 385px;
    height: auto;
    //border: dashed lightgrey 1px;
    margin-left: -385px;
    position: relative;
    margin-top: auto;
    padding-top: 50px;
    display: ${({$isVisible}) => ($isVisible ? "block" : "none")};
`;

export const ContainerBorder = styled.div`
    border: solid lightgray 1.5px;
    background-color: white;
    border-radius: 1%;

    -webkit-box-shadow: -5px 9px 19px -2px rgba(0, 0, 0, 0.32);
    box-shadow: -5px 9px 19px -2px rgba(0, 0, 0, 0.32);
`;

export const ContainerGrid = styled.div`
    //border: solid grey 1px;

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
    padding-bottom: 10px;
`;

export const ContainerProducts = styled.div``;

export const ContainerButtonsCart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "buttonLeft buttonRight";
    border-top: lightgrey 1px solid;

    padding-top: 10px;
    padding-bottom: 10px;
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

export const SubButton = styled.button`
    all: unset;
    cursor: pointer;
    border: 1px solid transparent;

    padding: 10px;
    width: 88%;
    text-align: center;

    font-weight: 500;
    font-family: "Inter-Medium", "Inter", sans-serif;

    font-size: 14px;
    letter-spacing: 0.6px;

    opacity: 0.6;

    margin-right: 20px;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;

    background-color: black;

    padding: 10px;
    width: 88%;
    text-align: center;

    font-weight: 600;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: white;
    font-size: 12px;
    letter-spacing: 0.2px;

    opacity: 0.6;

    margin-left: 20px;
    text-transform: uppercase;

    :hover {
        border: black 1px solid;
        background-color: white;
        color: black;
    }
`;

export const ContainerFixed = styled.div`
    max-height: 500px;
    overflow-y: scroll;
`;
