import React, {useEffect} from "react";
import {BlackBox, TextBox} from "./styles";
import {useAnimation} from "framer-motion";

const blackBox = {
    initial: {
        height: "50vh",
        top: "100vh",

        overflow: "hidden",
    },
    // animate
    animate: {
        height: "100vh",
        top: "0vh",

        overflow: "hidden",

        transition: {
            delay: 0,
            duration: 1,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const text = {
    initial: {
        opacity: 0,
    },
    // animate
    animate: {
        opacity: 1,

        transition: {
            delay: 0,
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

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
                duration: 1.25,
            },
        });
        await animationControlsText.start({
            opacity: 0,
            transition: {
                duration: 1.25,
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
