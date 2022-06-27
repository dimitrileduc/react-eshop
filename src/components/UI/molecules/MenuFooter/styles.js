import styled from "styled-components";

export const ContainerMenu = styled.div``;

export const UL = styled.ol`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
`;

export const LI = styled.li`
    color: black;
    flex-shrink: 0;

    white-space: pre;
    overflow: visible;
    opacity: 0.6;

    color: #000000;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 20px;

    position: relative;

    transition: opacity 0.5s ease-out;

    :hover {
        opacity: 1;
    }
`;
