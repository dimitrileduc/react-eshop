import styled from "styled-components";
import {BrowserRouter, Route, Link} from "react-router-dom";

export const StyledLink = styled(Link)`
    flex-shrink: 0;
    width: auto; /* 52px */
    height: auto; /* 17px */
    white-space: pre;
    overflow: visible;
    opacity: 1;
    font-weight: 500;
    font-family: inherit;

    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;

    text-decoration: none;
    color: inherit;

    display: inline-block;
    position: relative;

    :after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        top: 18px;
        height: 2px;
        bottom: 0;
        left: 4.5px;
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
