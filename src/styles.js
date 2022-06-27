import styled from "styled-components";
import {motion} from "framer-motion";

export const ContainerAnim = styled.div`
    //position: absolute;

    overflow: ${({$isAnimationRunning}) =>
        $isAnimationRunning ? "hidden" : "visible"};

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const BlackBox = styled(motion.div)`
    width: 100vw;
    background-color: black;

    position: relative;
    color: white;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: "TextBox";
`;

export const TextBox = styled.h3`
    justify-self: center;
    align-self: center;
    grid-area: TextBox;
    font-size: 32px;
`;
