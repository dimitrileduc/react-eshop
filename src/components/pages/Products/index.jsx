import React from "react";
import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";

import {Container} from "./styles";

function Products() {
    return (
        <>
            <Container>
                <div>Products</div>

                <Outlet />
            </Container>
        </>
    );
}

export default Products;
