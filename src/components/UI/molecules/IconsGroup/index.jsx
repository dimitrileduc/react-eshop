import React, {useState} from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";
import ShoppingCart from "../../organisms/ShoppingCart";

import {BrowserRouter, Route, Link} from "react-router-dom";

function IconsGroup({setIsCartVisible, isCartVisible}) {
    return (
        <>
            <Container>
                <IconUser />

                <IconBasket
                    setIsCartVisible={setIsCartVisible}
                    isCartVisible={isCartVisible}
                />
            </Container>
            <ShoppingCart isCartVisible={isCartVisible} />
        </>
    );
}

export default IconsGroup;

//<Link to="/myaccount">
//  </Link>
