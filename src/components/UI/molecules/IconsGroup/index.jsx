import React, {useState} from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";
import ShoppingCart from "../../organisms/ShoppingCart";

import {BrowserRouter, Route, Link} from "react-router-dom";

function IconsGroup({
    setIsCartVisible,
    isCartVisible,
    basket,
    setBasket,
    changeQuantityIsFromBasket,
    setChangeQuantityIsFromBasket,
}) {
    return (
        <>
            <Container>
                <IconUser />

                <IconBasket
                    setIsCartVisible={setIsCartVisible}
                    isCartVisible={isCartVisible}
                />
            </Container>
            <ShoppingCart
                isCartVisible={isCartVisible}
                setBasket={setBasket}
                basket={basket}
                setIsCartVisible={setIsCartVisible}
                changeQuantityIsFromBasket={changeQuantityIsFromBasket}
                setChangeQuantityIsFromBasket={setChangeQuantityIsFromBasket}
            />
        </>
    );
}

export default IconsGroup;

//<Link to="/myaccount">
//  </Link>
