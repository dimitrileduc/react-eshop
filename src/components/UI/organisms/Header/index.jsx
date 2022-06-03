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
    basket,
    setBasket,
    changeQuantityIsFromBasket,
    setChangeQuantityIsFromBasket,
}) {
    return (
        <HeaderDiv>
            <Navbar />

            <Logo logoPng={LogoPng} logoWebp={LogoWebp} />

            <IconsGroup
                setIsCartVisible={setIsCartVisible}
                isCartVisible={isCartVisible}
                setBasket={setBasket}
                basket={basket}
                changeQuantityIsFromBasket={changeQuantityIsFromBasket}
                setChangeQuantityIsFromBasket={setChangeQuantityIsFromBasket}
            />
        </HeaderDiv>
    );
}

export default Header;
