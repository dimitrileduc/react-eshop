import styled from "styled-components";

export const HeaderDiv = styled.div`
    margin-top: 20px;
    box-sizing: border-box;

    display: flex;
    align-items: center;

    width: 100vw;
    height: 20px;

    padding: 40px;

    overflow: visible;
    position: fixed;
    background-color: white;

    z-index: 60;

    color: black;
    background-color: white;

    border-top: 1px solid black;
    border-bottom: 1px solid black;

    transition: opacity 0.2s ease-in-out;

    opacity: ${({$scrollDirection}) => ($scrollDirection === "up" ? "1" : "0")};
`;

/*
background: rgb(255, 255, 255);
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 96%,
        rgba(0, 212, 255, 0) 100%
    );
    */
