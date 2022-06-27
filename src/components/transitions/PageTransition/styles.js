import styled from "styled-components";
import {motion} from "framer-motion";

export const Panel = styled(motion.div)`
    height: 100vh;
    width: 50vw;
    position: absolute;
    z-index: 500;
    top: 0;
`;

export const LeftPanel = styled(Panel)`
    background-color: black;
`;

export const RightPanel = styled(Panel)`
    background-color: lightblue;
    right: 0;
`;
