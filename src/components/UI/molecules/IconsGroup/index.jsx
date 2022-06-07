import React, {useState} from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";
import ShoppingCart from "../../organisms/ShoppingCart";

function IconsGroup({
    setIsCartVisible,
    isCartVisible,
    cart,
    orders,
    productsItems,
    setOrders,
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
                setIsCartVisible={setIsCartVisible}
                cart={cart}
                orders={orders}
                productsItems={productsItems}
                setOrders={setOrders}
            />
        </>
    );
}

export default IconsGroup;

//<Link to="/myaccount">
//  </Link>
