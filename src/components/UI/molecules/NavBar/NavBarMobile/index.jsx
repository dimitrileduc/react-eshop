import React from "react";

import {BrowserRouter, Route, Link} from "react-router-dom";

import {Container} from "./styles.js";

import IconUser from "../../../atoms/Icons/iconUser";
import IconBasket from "../../../atoms/Icons/iconBasket";
import IconShop from "../../../atoms/Icons/iconShop.jsx";
import IconInfo from "../../../atoms/Icons/IconInfo.jsx";

function NavBarMobile() {
    return (
        <Container>
            <Link to="/products">
                <IconShop />
            </Link>
            <Link to="/contacts">
                <IconInfo />
            </Link>
            <IconUser />
            <IconBasket />
        </Container>
    );
}

export default NavBarMobile;
