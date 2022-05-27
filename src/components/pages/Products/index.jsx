import React from "react";
import {Outlet} from "react-router-dom";
import FilterWidget from "../../UI/molecules/FilterWidget";
import {Container} from "./styles";

function Products() {
    return (
        <Container>
            <div>Products</div>
            <FilterWidget />

            <Outlet />
        </Container>
    );
}

export default Products;
