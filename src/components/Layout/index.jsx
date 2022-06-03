import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

import {ContainerLayout} from "./styles";

const Layout = ({
    setIsCartVisible,
    isCartVisible,
    basket,
    setBasket,
    changeQuantityIsFromBasket,
    setChangeQuantityIsFromBasket,
}) => {
    return (
        <>
            <ContainerLayout>
                <Header
                    setIsCartVisible={setIsCartVisible}
                    isCartVisible={isCartVisible}
                    setBasket={setBasket}
                    basket={basket}
                    changeQuantityIsFromBasket={changeQuantityIsFromBasket}
                    setChangeQuantityIsFromBasket={
                        setChangeQuantityIsFromBasket
                    }
                />
                <Outlet />
                <Footer />
            </ContainerLayout>
        </>
    );
};

export default Layout;
