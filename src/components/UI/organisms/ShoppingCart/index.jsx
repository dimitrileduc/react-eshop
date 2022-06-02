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
    Button,
    SubButton,
} from "./styles";

import ProductBasket from "../../molecules/ProductBasket";

function ShoppingCart({isCartVisible}) {
    return (
        <ContainerCart $isVisible={isCartVisible}>
            <ContainerBorder>
                <ContainerGrid>
                    <TitleCart>SHOPPING BAG</TitleCart>
                    <ContainerProducts>
                        <ProductBasket></ProductBasket>
                    </ContainerProducts>
                    <ContainerButtonsCart>
                        <ContainerButtonLeftCart>
                            <SubButton>
                                Total : <strong>€99</strong>{" "}
                            </SubButton>
                        </ContainerButtonLeftCart>
                        <ContainerButtonRightCart>
                            <Button>checkout</Button>
                        </ContainerButtonRightCart>
                    </ContainerButtonsCart>
                </ContainerGrid>
            </ContainerBorder>
        </ContainerCart>
    );
}

export default ShoppingCart;
