import styled from "styled-components";

export const FilterContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "label . filter"
        "filterBox filterBox filterBox";
`;

export const Label = styled.div`
    justify-self: start;
    grid-area: label;
`;

export const Filter = styled.div`
    justify-self: end;
    grid-area: filter;
`;

export const FilterBox = styled.div`
    //border: 1px dashed grey;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "search category price";
    justify-self: stretch;
    grid-area: filterBox;

    display: ${({$visible}) => ($visible ? "true" : "none")};
`;

export const Search = styled.div`
    //border: 1px dashed grey;
    justify-self: start;
    grid-area: search;
`;

export const Category = styled.div`
    //border: 1px dashed grey;
    justify-self: center;
    grid-area: category;
`;

export const Price = styled.div`
    //border: 1px dashed grey;
    justify-self: end;
    grid-area: price;
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    z-index: 1;

    margin-left: ${({$isRight}) => ($isRight ? "-90px" : 0)};
`;

export const Option = styled.div`
    color: black;
    padding: 8px 10px;
    text-decoration: none;
    display: block;
    opacity: 0.8;
    font-size: 12px;
    cursor: pointer;

    :hover {
        background-color: #fcfbfb;
        font-weight: 600;
    }
`;

export const DropDownButton = styled.button`
    background-color: white;
    border: 0.5px white solid;
    color: black;
    opacity: 0.5;
    padding: 5px;
    font-size: 14px;

    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;

export const DropDownLabel = styled.div`
    position: relative;
    display: inline-block;
    z-index: 19;

    :hover {
        width: 500;
        ${DropDownContent} {
            display: block;
        }
    }
`;

export const FilterButton = styled.button`
    background-color: white;
    border: 0.5px white solid;
    color: black;
    opacity: 0.5;
    padding: 5px;
    font-size: 14px;

    cursor: pointer;

    :hover {
        opacity: 1;
    }
`;

export const Input = styled.input`
    width: 25vw;
    border: 1px lightgray solid;
    border-radius: 3px;
    :hover {
        border: 1px gray solid;
    }
    :focus {
        outline: none !important;
        border: 1px solid green;
    }
`;
