import React from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";
import ShoppingCart from "../../organisms/ShoppingCart";

import {BrowserRouter, Route, Link} from "react-router-dom";

function IconsGroup() {
    return (
        <>
            <Container>
                <IconUser />

                <IconBasket />
            </Container>
            <ShoppingCart />
        </>
    );
}

export default IconsGroup;

//<Link to="/myaccount">
//  </Link>
