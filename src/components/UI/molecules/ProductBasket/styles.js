import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "image content";
`;

export const ImageContainer = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: image;
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
    justify-self: center;
    align-self: center;
    grid-area: content;
`;

export const TitleContainer = styled.div`
    justify-self: start;
    align-self: start;
    grid-area: title;
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
`;

export const PriceContainer = styled.div`
    justify-self: end;
    align-self: center;
    grid-area: price;
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
`;

export const ButtonRightContainer = styled.div`
    justify-self: end;
    align-self: center;
    grid-area: buttonRight;
`;
