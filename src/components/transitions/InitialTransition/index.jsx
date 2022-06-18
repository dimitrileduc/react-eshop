import React, {useState, useEffect, useCallback} from "react";
import {motion, MotionConfigContext} from "framer-motion";
import {Container, BlackBox, TextBox} from "./styles";

// Initial transition : opener  .

const names = [
    "Bonjour",
    "你们好",
    "Ẹ ku arọ",
    "Salam",
    "Guten Tag",
    "Dobar den",
    "xiàwǔ hǎo",
    "Hello",
];

function InitialTransition() {
    const [newName, setnewName] = useState("");

    useEffect(() => {
        let x = -1;
        const intervalID = setInterval(() => {
            if (++x === 7) {
                window.clearInterval(intervalID);
            }
            setnewName(names[x]);
        }, 400);
    }, []);

    const blackBox = {
        initial: {
            height: "100vh",
            top: "0vh",
        },
        // animate
        animate: {
            height: "0vh",
            top: "-5vh",

            transition: {
                delay: 3,
                duration: 2,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    return (
        <div>
            <Container>
                <BlackBox
                    initial="initial"
                    animate="animate"
                    variants={blackBox}>
                    <TextBox>{newName}</TextBox>
                </BlackBox>
            </Container>
        </div>
    );
}

export default InitialTransition;
