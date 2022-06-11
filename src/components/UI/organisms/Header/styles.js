import styled from "styled-components";

export const HeaderDiv = styled.div`
    box-sizing: border-box;

    display: flex;
    align-items: center;

    width: 100vw;
    height: 125px;

    padding: 40px;

    overflow: visible;
    position: fixed;

    z-index: 100;

    background-color: ${({$scrollDirection}) =>
        $scrollDirection === "up" ? "none" : "none"};
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
