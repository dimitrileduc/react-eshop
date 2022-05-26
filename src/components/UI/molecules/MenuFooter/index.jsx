import React from "react";
import {ContainerMenu, LI, UL} from "./styles";

import {BrowserRouter, Route, Link} from "react-router-dom";

function MenuFooter() {
    return (
        <ContainerMenu>
            <UL>
                <Link to="/" style={{textDecoration: "none"}}>
                    <LI>Home</LI>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                    <LI>Products</LI>
                </Link>
                <Link to="/contacts" style={{textDecoration: "none"}}>
                    <LI>Contacts</LI>
                </Link>
            </UL>
        </ContainerMenu>
    );
}

export default MenuFooter;
