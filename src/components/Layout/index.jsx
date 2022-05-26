import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

import {ContainerLayout} from "./styles";

const Layout = () => {
    return (
        <>
            <ContainerLayout>
                <Header />
                <Outlet />
                <Footer />
            </ContainerLayout>
        </>
    );
};

export default Layout;
