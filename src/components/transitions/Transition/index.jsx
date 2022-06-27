import React, {useEffect} from "react";
import {BlackBox, TextBox} from "./styles";
import {useAnimation} from "framer-motion";

function Transition() {
    const animationControls = useAnimation();
    const animationControlsText = useAnimation();

    async function sequence() {
        await animationControls.start({
            height: "100vh",
            top: "0vh",
            transition: {
                ease: "easeInOut",
                duration: 1,
            },
        });
        await animationControls.start({
            height: "100vh",
            top: "0vh",
            transition: {
                ease: "easeInOut",
                duration: 0.5,
            },
        });
        await animationControls.start({
            height: "0vh",
            top: "0vh",
            transition: {
                ease: "easeInOut",
                duration: 1,
            },
        });
    }

    async function sequenceText() {
        await animationControlsText.start({
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        });
        await animationControlsText.start({
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        });
    }

    useEffect(() => {
        sequence();
        sequenceText();
    }, []);
    return (
        <>
            <BlackBox animate={animationControls}>
                <TextBox animate={animationControlsText}>Page</TextBox>
            </BlackBox>
        </>
    );
}

export default Transition;
//onAnimationComplete={changeStateAnimation}
