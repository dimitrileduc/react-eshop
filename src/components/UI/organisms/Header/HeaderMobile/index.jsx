import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import {HeaderDiv} from "../styles.js";

import Logo from "../../../atoms/Logo/index.jsx";

import LogoPng from "../../../../assets/logo/logo.png";
import LogoWebp from "../../../../assets/logo/logo.webp";

function HeaderMobile() {
    return (
        <HeaderDiv>
            <Logo logoPng={LogoPng} logoWebp={LogoWebp} />
        </HeaderDiv>
    );
}

export default HeaderMobile;
