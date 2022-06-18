import React from "react";
import {HeaderDiv} from "./styles.js";

import Navbar from "../../molecules/NavBar";
import Logo from "../../atoms/Logo/index.jsx";
import IconsGroup from "../../molecules/IconsGroup/index.jsx";

import LogoPng from "../../../assets/logo/logo.png";
import LogoWebp from "../../../assets/logo/logo.webp";

function Header({
    setIsCartVisible,
    isCartVisible,

    orders,
    productsItems,
    setOrders,
    isImageHeaderVisible,
    scrollDirection,
}) {
    return (
        <HeaderDiv
            $scrollDirection={scrollDirection}
            $isImageHeaderVisible={isImageHeaderVisible}>
            <Navbar />

            <Logo logoPng={LogoPng} logoWebp={LogoWebp} />

            <IconsGroup
                setIsCartVisible={setIsCartVisible}
                isCartVisible={isCartVisible}
                orders={orders}
                productsItems={productsItems}
                setOrders={setOrders}
            />
        </HeaderDiv>
    );
}

export default Header;
