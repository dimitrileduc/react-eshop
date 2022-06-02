import styled from "styled-components";

export const Container = styled.div`
    //padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "image content";
    border-top: lightgrey 1px solid;

    padding-bottom: 10px;
    padding-top: 10px;
`;

export const ImageContainer = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: image;
    height: 100%;
    width: auto;
    background-color: yellow;
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "title"
        "infos"
        "buttons";
    justify-self: stretch;
    align-self: center;
    grid-area: content;

    //border: red dashed 1px;
`;

export const TitleContainer = styled.div`
    justify-self: start;
    align-self: start;
    grid-area: title;

    text-align: center;
    font-weight: 600;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0.2px;

    opacity: 0.8;
`;

export const InfosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "quantity price";
    justify-self: stretch;
    align-self: center;
    grid-area: infos;
`;

export const QuantityContainer = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: quantity;

    opacity: 0.6;
    font-weight: 500;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0.4px;

    padding-bottom: 10px;
`;

export const PriceContainer = styled.div`
    justify-self: end;
    align-self: center;
    grid-area: price;

    opacity: 0.8;
    font-weight: 500;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0.4px;
    padding-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "buttonLeft buttonRight";
    grid-area: buttons;
`;

export const ButtonLeftContainer = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: buttonLeft;
    width: 100%;
`;

export const ButtonRightContainer = styled.div`
    justify-self: end;
    align-self: center;
    grid-area: buttonRight;
    width: 90%;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;
    border: lightgray 1px solid;
    padding: 5px;
    width: 88%;
    text-align: center;

    font-weight: 600;
    font-family: "Inter-Medium", "Inter", sans-serif;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0.2px;

    opacity: 0.6;

    //text-transform: uppercase;

    :hover {
        border: black 1px solid;
    }
`;
