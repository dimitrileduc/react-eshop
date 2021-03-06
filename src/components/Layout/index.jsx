import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

import ShoppingCart from "../UI/organisms/ShoppingCart";

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
}) => {
    return (
        <>
            <div>
                <ContainerLayout>
                    <Header
                        setIsCartVisible={setIsCartVisible}
                        isCartVisible={isCartVisible}
                        orders={orders}
                        productsItems={productsItems}
                        setOrders={setOrders}
                        isImageHeaderVisible={isImageHeaderVisible}
                        scrollDirection={scrollDirection}
                    />
                    <ShoppingCart
                        isCartVisible={isCartVisible}
                        setIsCartVisible={setIsCartVisible}
                        cart={cart}
                        orders={orders}
                        productsItems={productsItems}
                        setOrders={setOrders}
                    />
                    <Outlet />
                    <Footer />
                </ContainerLayout>
            </div>
        </>
    );
};

export default Layout;
