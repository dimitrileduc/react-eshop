import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

import {ContainerLayout} from "./styles";

const Layout = ({
    setIsCartVisible,
    isCartVisible,
    cart,
    orders,
    productsItems,
    setOrders,
}) => {
    return (
        <>
            <ContainerLayout>
                <Header
                    setIsCartVisible={setIsCartVisible}
                    isCartVisible={isCartVisible}
                    cart={cart}
                    orders={orders}
                    productsItems={productsItems}
                    setOrders={setOrders}
                />
                <Outlet />
                <Footer />
            </ContainerLayout>
        </>
    );
};

export default Layout;
