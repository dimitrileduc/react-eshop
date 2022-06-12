import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    flex-direction: column;
`;

export const ContainerContent = styled.div`
    background-color: white;
`;

export const ContainerHeader = styled.div`
    padding: 10px;
`;

export const Title = styled.div`
    margin: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;
`;

export const ContainerBody = styled.div`
    padding: 10px;

    margin-top: 10px;
`;

export const ContainerFooter = styled.div`
    padding: 10px;
`;

/*
  ContainerHead,
    ContainerTitle,
    ContainerButton,
    */

export const ContainerTitle = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`;

export const ContainerButton = styled.div`
    text-align: right;
`;

export const Button = styled.button`
    all: unset;
    cursor: pointer;
    opacity: 0.4;

    :hover {
        opacity: 1;
    }
`;
