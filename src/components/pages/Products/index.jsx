import React from "react";
import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";

import {Container} from "./styles";
import Transition from "../../transitions/Transition";
function Products() {
    return (
        <>
            <Transition />
            <Container>
                <div>Products</div>

                <Outlet />
            </Container>
        </>
    );
}

export default Products;
