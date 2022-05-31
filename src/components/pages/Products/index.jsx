import React from "react";
import {Outlet} from "react-router-dom";

import {Container} from "./styles";

function Products() {
    return (
        <Container>
            <div>Products</div>

            <Outlet />
        </Container>
    );
}

export default Products;
