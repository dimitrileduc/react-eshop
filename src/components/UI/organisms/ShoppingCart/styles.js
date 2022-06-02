import styled from "styled-components";

export const ContainerCart = styled.div`
    width: 300px;
    height: auto;
    border: solid lightgrey 1px;
    margin-left: -300px;
    position: relative;
    margin-top: auto;
    padding-top: 50px;
`;

export const ContainerGrid = styled.div`
    border: solid grey 1px;
    background-color: white;
    display: flex;
    flex-direction: column;
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

export const ContainerProducts = styled.div`
    border: 1px dashed lightblue;

    padding-top: 10px;
    padding-bottom: 10px;
`;
