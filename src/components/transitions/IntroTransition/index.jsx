import React, {useEffect, useState} from "react";
import {BlackBox, TextBox} from "./styles";

const blackBox = {
    initial: {
        height: "100vh",
        top: "0vh",
        borderRadius: "0% 0% 0% 0%",
        overflow: "hidden",
    },
    // animate
    animate: {
        height: "0vh",
        top: "0vh",
        borderRadius: "0% 0% 27% 27%",
        overflow: "hidden",

        transition: {
            delay: 2,
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const names = [
    "Bonjour",
    "你们好",
    "Ẹ ku arọ",
    "Salam",
    "Guten Tag",
    "Dobar den",
    "xiàwǔ hǎo",
    "hola!",
    "Hello.",
];

function IntroTransition({changeStateAnimation}) {
    const [newName, setnewName] = useState("");

    useEffect(() => {
        let x = -1;
        const intervalID = setInterval(() => {
            if (++x === names.length - 1) {
                window.clearInterval(intervalID);
            }
            setnewName(names[x]);
        }, 200);
    }, []);
    return (
        <BlackBox
            initial="initial"
            animate="animate"
            onAnimationComplete={changeStateAnimation}
            variants={blackBox}>
            <TextBox>{newName}</TextBox>
        </BlackBox>
    );
}

export default IntroTransition;
