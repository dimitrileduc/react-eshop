import styled from "styled-components";

export const ContainerImage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "ContainerButton";
`;

export const ContainerButton = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: ContainerButton;
    color: white;
    display: flex;
    flex-direction: column;
    margin: 40px;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    border: 1px white solid;
    cursor: pointer;
    :hover {
        border: 1px black solid;
        background-color: white;
        color: black;
    }
`;
