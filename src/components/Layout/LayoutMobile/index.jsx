import React from "react";
import {Outlet} from "react-router-dom";
import HeaderMobile from "../../UI/organisms/Header/HeaderMobile";
import FooterMobile from "../../UI/organisms/Footer/FooterMobile";

const LayoutMobile = () => {
    return (
        <>
            <HeaderMobile />
            <Outlet />
            <FooterMobile />
        </>
    );
};

export default LayoutMobile;
