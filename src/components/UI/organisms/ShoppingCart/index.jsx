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

function ShoppingCart({isCartVisible, basket, setBasket}) {
    console.log("basket in card" + JSON.stringify(basket[0]));

    const renderList = basket.map((item, index) => (
        //<div key={index}>{item.product.title}</div>,
        //console.log(item.product.title),
        <ProductBasket product={item.product}></ProductBasket>
    ));

    return (
        <ContainerCart $isVisible={isCartVisible}>
            <ContainerBorder>
                <ContainerGrid>
                    <TitleCart>SHOPPING BAG</TitleCart>
                    <ContainerProducts>{renderList}</ContainerProducts>
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
