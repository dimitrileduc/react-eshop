import styled from "styled-components";

export const StyledLink = styled.a`
    flex-shrink: 0;
    width: auto; /* 52px */
    height: auto; /* 17px */
    white-space: pre;
    overflow: visible;
    opacity: 0.8;
    font-weight: 500;
    font-family: "Inter-SemiBold", "Inter", sans-serif;

    font-size: 18px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    //text-transform: uppercase;

    text-decoration: none;
    color: inherit;

    display: inline-block;
    position: relative;
    margin-bottom: 15px;

    :hover {
        cursor: pointer;
    }

    :after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        top: 18px;
        height: 2px;
        bottom: 0;
        left: 2.5px;
        background-color: #000000;
        transform-origin: bottom;
        transition: 0.25s ease-out;
        opacity: 0;
    }

    :hover:after {
        transform: scaleX(0.93);
        transform-origin: bottom left;
        opacity: 0.6;
    }
`;
