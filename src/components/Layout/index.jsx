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
    products,
    isImageHeaderVisible,
    scrollDirection,
    isHederVisible,
}) => {
    return (
        <>
            <div>
                <ContainerLayout>
                    <Header
                        setIsCartVisible={setIsCartVisible}
                        isCartVisible={isCartVisible}
                        cart={cart}
                        orders={orders}
                        productsItems={productsItems}
                        setOrders={setOrders}
                        isImageHeaderVisible={isImageHeaderVisible}
                        scrollDirection={scrollDirection}
                        isHederVisible={isHederVisible}
                    />
                    <Outlet />
                    <Footer />
                </ContainerLayout>
            </div>
        </>
    );
};

export default Layout;
