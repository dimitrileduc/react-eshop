import React from "react";
import {
    ContainerMargin,
    Container,
    ContainerSignIn,
    ContainerSignUp,
} from "./styles";

import SignIn from "../SignIn";
import SignUp from "../SignUp";

function FormAuth({setIsLogged}) {
    function changeIsLogged() {
        setIsLogged(true);
        console.log("change is logged ");
    }
    return (
        <ContainerMargin>
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
        </ContainerMargin>
    );
}

export default FormAuth;
