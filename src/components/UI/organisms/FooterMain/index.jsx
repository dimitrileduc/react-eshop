import React from "react";
import {
    ContainerStyled,
    AboutContainer,
    StoreContainer,
    SuscribeContainer,
    AboutContent,
    StoreContent,
    SuscribeContent,
    TitleSectionFooter,
} from "./styles";

import AboutFooter from "../../molecules/AboutFooter";
import MenuFooter from "../../molecules/MenuFooter";
import SuscribeFooter from "../../molecules/SuscribeFooter";

function FooterMain() {
    return (
        <ContainerStyled>
            <AboutContainer>
                <TitleSectionFooter>About</TitleSectionFooter>
            </AboutContainer>
            <StoreContainer>
                <TitleSectionFooter>Store</TitleSectionFooter>
            </StoreContainer>
            <SuscribeContainer>
                <TitleSectionFooter>Suscribe</TitleSectionFooter>
            </SuscribeContainer>
            <AboutContent>
                <AboutFooter />
            </AboutContent>
            <StoreContent>
                <MenuFooter />
            </StoreContent>
            <SuscribeContent>
                <SuscribeFooter />
            </SuscribeContent>
        </ContainerStyled>
    );
}

export default FooterMain;
