import React from "react";
import {
    ContainerCart,
    ContainerGrid,
    TitleCart,
    ContainerProducts,
} from "./styles";

import ProductBasket from "../../molecules/ProductBasket";

function ShoppingCart() {
    return (
        <ContainerCart>
            <ContainerGrid>
                <TitleCart>SHOPPING BAG</TitleCart>
                <ContainerProducts>
                    <ProductBasket></ProductBasket>
                </ContainerProducts>
            </ContainerGrid>
        </ContainerCart>
    );
}

export default ShoppingCart;
