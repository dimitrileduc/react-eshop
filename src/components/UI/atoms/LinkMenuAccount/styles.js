import styled from "styled-components";

export const StyledLink = styled.a`
    flex-shrink: 0;
    width: auto; /* 52px */
    height: auto; /* 17px */
    white-space: pre;
    overflow: visible;
    opacity: 0.8;
    font-weight: 500;

    font-size: 16px;
    letter-spacing: 0.4px;
    line-height: 1.2;
    //text-transform: uppercase;

    text-decoration: none;
    color: inherit;

    display: inline-block;
    position: relative;
    margin-bottom: 15px;
    opacity: 0.6;

    :hover {
        cursor: pointer;
        opacity: 1;
    }
    :active {
        opacity: 1;
    }
`;
