import styled from "styled-components";

export const ContainerFixed = styled.div`
    position: fixed;
    width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    padding-top: 20px;

    border: 1px solid lightgray;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;
