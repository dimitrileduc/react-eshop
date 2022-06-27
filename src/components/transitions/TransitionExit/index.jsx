import React, {useEffect} from "react";
import {BlackBox, TextBox} from "./styles";
import {useAnimation} from "framer-motion";

function TransitionExit({pageName}) {
    return (
        <>
            <BlackBox
                initial={{
                    height: "100vh",
                    top: "0vh",
                    transition: {
                        ease: "easeInOut",
                        duration: 1,
                    },
                }}
                animate={{
                    height: "0vh",
                    top: "100vh",
                    transition: {
                        ease: "easeInOut",
                        delay: 1,
                        duration: 0.5,
                    },
                }}
                exit={{
                    height: "100vh",
                    top: "0vh",
                    transition: {
                        ease: "easeInOut",
                        duration: 1,
                    },
                }}>
                <TextBox
                    initial={{
                        opacity: 1,
                        transition: {
                            ease: "easeInOut",

                            duration: 1,
                        },
                    }}
                    animate={{
                        opacity: 0,
                        transition: {
                            ease: "easeInOut",
                            delay: 0.5,
                            duration: 0.5,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            ease: "easeInOut",
                            delay: 0.5,
                            duration: 1,
                        },
                    }}>
                    {pageName}
                </TextBox>
            </BlackBox>
        </>
    );
}

export default TransitionExit;
//onAnimationComplete={changeStateAnimation}

/*
await animationControls.start({
            height: "0vh",
            top: "0vh",
            transition: {
                ease: "easeInOut",
                duration: 1,
            },
        });
        */

/*

        await animationControlsText.start({
            opacity: 0,
            transition: {
                duration: 1.25,
            },
        });*/
