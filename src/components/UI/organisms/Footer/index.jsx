import React from "react";
import {Container} from "./styles";
import FooterMain from "../FooterMain";
import FooterBottom from "../FooterBottom";

function Footer() {
    return (
        <Container>
            <FooterMain />
            <FooterBottom />
        </Container>
    );
}

export default Footer;
