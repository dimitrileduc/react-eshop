import styled from "styled-components";

export const Container = styled.div`
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
        "Title"
        "Category"
        "Description"
        "Price"
        "Button";
`;

export const TitleContainer = styled.div`
    justify-self: start;
    grid-area: Title;
`;

export const CategoryContainer = styled.div`
    justify-self: start;
    grid-area: Category;
`;

export const DescriptionContainer = styled.div`
    justify-self: start;
    grid-area: Description;
    width: 100%;
`;

export const PriceContainer = styled.div`
    justify-self: start;
    grid-area: Price;
`;

export const ButtonContainer = styled.div`
    justify-self: start;
    grid-area: Button;
`;

export const Title = styled.p`
    opacity: 0.8;
    font-weight: 700;

    color: #000000;
    font-size: 32px;
    letter-spacing: 0px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
    padding: 0;
`;

export const Category = styled.p`
    opacity: 0.6;

    color: #000000;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 1.5;
    text-align: left;
    margin-top: 10px;
    padding: 0;
`;

export const Description = styled.p`
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;

    opacity: 0.7;

    color: #000000;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 1.7;
    text-align: left;
    margin-top: 20px;
    padding: 0;
`;

export const Price = styled.p`
    opacity: 0.8;

    color: #000000;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 1.5;
    text-align: left;
    margin-top: 20px;
    padding: 0;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;

    background-color: black;
    border: white 1px solid;

    padding: 10px;
    width: 88%;
    text-align: center;

    font-weight: 600;

    color: white;
    font-size: 12px;
    letter-spacing: 0.2px;

    opacity: 0.6;

    text-transform: uppercase;

    :hover {
        border: black 1px solid;
        background-color: white;
        color: black;
    }
`;
