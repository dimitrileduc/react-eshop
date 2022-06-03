import React, {useState, useEffect} from "react";
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
    const [total, setTotal] = useState(0);

    console.log("basket in card" + JSON.stringify(basket[0]));

    useEffect(() => {
        setTotal(0);
        let subTotal = 0;
        basket.map(
            (item, index) =>
                (subTotal = subTotal + item.quantity * item.product.price),
        );
        setTotal(subTotal);
        console.log(total);
    }, [basket]);

    const renderList = basket.map((item, index) => (
        //<div key={index}>{item.product.title}</div>,
        //console.log(item.product.title),
        <ProductBasket
            product={item.product}
            basket={basket}
            setBasket={setBasket}
            quantity={item.quantity}></ProductBasket>
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
                                Total : <strong>€{total}</strong>{" "}
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
