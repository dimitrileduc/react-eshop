import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

import {ContainerLayout} from "./styles";

const Layout = ({setIsCartVisible, isCartVisible, basket, setBasket}) => {
    return (
        <>
            <ContainerLayout>
                <Header
                    setIsCartVisible={setIsCartVisible}
                    isCartVisible={isCartVisible}
                    setBasket={setBasket}
                    basket={basket}
                />
                <Outlet />
                <Footer />
            </ContainerLayout>
        </>
    );
};

export default Layout;
