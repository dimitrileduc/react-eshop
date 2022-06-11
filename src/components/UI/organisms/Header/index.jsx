import React from "react";
import {HeaderDiv} from "./styles.js";

import Navbar from "../../molecules/NavBar";
import Logo from "../../atoms/Logo/index.jsx";
import IconsGroup from "../../molecules/IconsGroup/index.jsx";

import LogoPng from "../../../assets/logo/logo.png";
import LogoWebp from "../../../assets/logo/logo.webp";

import useScrollDirection from "../../../utils/useScrollDirection/index.jsx";

function Header({
    setIsCartVisible,
    isCartVisible,
    cart,
    orders,
    productsItems,
    setOrders,
}) {
    const scrollDirection = useScrollDirection();
    //const scrollDirection = false;
    console.log("scroll direction is" + scrollDirection);
    return (
        <HeaderDiv $scrollDirection={scrollDirection}>
            <Navbar />

            <Logo logoPng={LogoPng} logoWebp={LogoWebp} />

            <IconsGroup
                setIsCartVisible={setIsCartVisible}
                isCartVisible={isCartVisible}
                cart={cart}
                orders={orders}
                productsItems={productsItems}
                setOrders={setOrders}
            />
        </HeaderDiv>
    );
}

export default Header;
