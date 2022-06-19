import styled from "styled-components";
import {motion} from "framer-motion";

export const BlackBox = styled(motion.div)`
    width: 100vw;
    background-color: black;

    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "TextBox";
    z-index: 500;
    position: absolute;
    height: 0vh;
    top: 100vh;
`;

export const TextBox = styled(motion.div)`
    justify-self: center;
    align-self: center;
    grid-area: TextBox;
    font-size: 32px;
    position: absolute;
    color: white;
    z-index: 600;
    opacity: 0;
`;
