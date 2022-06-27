import React from "react";
import {
    ContainerMargin,
    Container,
    ContainerSignIn,
    ContainerSignUp,
} from "./styles";

import SignIn from "../SignIn";
import SignUp from "../SignUp";

import {motion} from "framer-motion";

function FormAuth({setIsLogged}) {
    function changeIsLogged() {
        setIsLogged(true);
        console.log("change is logged ");
    }
    return (
        <ContainerMargin>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <Container>
                    <ContainerSignIn>
                        <SignIn />
                    </ContainerSignIn>
                    <ContainerSignUp>
                        <SignUp />
                    </ContainerSignUp>
                </Container>
                myaccount (dev mode) -
                <button onClick={changeIsLogged}>Acces</button>
            </motion.div>
        </ContainerMargin>
    );
}

export default FormAuth;
