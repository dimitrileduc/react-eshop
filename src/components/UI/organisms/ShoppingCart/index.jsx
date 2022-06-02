import React from "react";
import {
    ContainerCart,
    ContainerGrid,
    ContainerBorder,
    TitleCart,
    ContainerProducts,
    ContainerButtonsCart,
    ContainerButtonRightCart,
    ContainerButtonLeftCart,
} from "./styles";

import ProductBasket from "../../molecules/ProductBasket";

function ShoppingCart() {
    return (
        <ContainerCart>
            <ContainerBorder>
                <ContainerGrid>
                    <TitleCart>SHOPPING BAG</TitleCart>
                    <ContainerProducts>
                        <ProductBasket></ProductBasket>
                    </ContainerProducts>
                    <ContainerButtonsCart>
                        <ContainerButtonLeftCart>
                            Subtotal 125 Eur
                        </ContainerButtonLeftCart>
                        <ContainerButtonRightCart>
                            CHECKOUT
                        </ContainerButtonRightCart>
                    </ContainerButtonsCart>
                </ContainerGrid>
            </ContainerBorder>
        </ContainerCart>
    );
}

export default ShoppingCart;
