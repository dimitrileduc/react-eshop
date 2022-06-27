import styled from "styled-components";

export const ProductContainer = styled.div`
    //border: 1px green solid;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
    gap: 0px 0px;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: 1px white solid;

    :hover {
        transform: scale(0.97);
    }
`;

export const ImageContainer = styled.div`
    //border: 1px red solid;
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 2 / 2;

    width: 250px;
    height: 250px;
`;

export const LabelContainer = styled.div`
    //border: 1px orange solid;
    justify-self: end;
    align-self: start;
    grid-area: 1 / 1 / 2 / 2;
`;

export const InfosContainer = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    justify-self: center;
    align-self: center;
    grid-area: 2 / 1 / 3 / 2;
`;

export const TitleContainer = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 2 / 2;
    // border: 1px yellowgreen solid;
`;

export const CategoryContainer = styled.div`
    //border: 1px brown solid;
    justify-self: center;
    align-self: center;
    grid-area: 2 / 1 / 3 / 2;
`;

export const PriceContainer = styled.div`
    //border: 1px yellow solid;
    justify-self: center;
    align-self: center;
    grid-area: 3 / 1 / 4 / 2;
`;

export const Label = styled.p`
    white-space: pre;
    overflow: visible;
    opacity: 0.8;
    font-weight: 600;

    color: #000000;
    font-size: 12px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    text-transform: uppercase;

    margin-left: 10px;
    margin-right: 10px;
`;

export const Title = styled.div`
    opacity: 0.8;
    font-weight: 600;

    color: #000000;
    font-size: 14px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    text-align: center;
`;

export const Category = styled.div`
    opacity: 0.6;
    font-weight: 500;

    color: #000000;
    font-size: 12px;
    letter-spacing: 0.4px;

    text-align: center;
    text-decoration: none;
    padding-top: 2px;
`;

export const Price = styled.div`
    opacity: 0.8;
    font-weight: 500;

    color: #000000;
    font-size: 14px;
    letter-spacing: 0.4px;

    text-align: center;
    text-decoration: none;
    padding-top: 5px;
`;
