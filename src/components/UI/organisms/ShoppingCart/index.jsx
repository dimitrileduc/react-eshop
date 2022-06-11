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
    ContainerFixed,
} from "./styles";

import ProductBasket from "../../molecules/ProductBasket";

function ShoppingCart({
    isCartVisible,
    setIsCartVisible,
    cart,
    orders,
    productsItems,
    setOrders,
}) {
    const [total, setTotal] = useState(0);

    // Update total price if orders is updated
    useEffect(() => {
        setTotal(0);
        let subTotal = 0;
        orders.forEach(function (order) {
            productsItems.forEach(function (item) {
                console.log("IFIF " + order.productID + " IFIF " + item.id);
                if (order.productID === item.id) {
                    subTotal = subTotal + order.quantity * item.price;
                } else {
                }
            });
        });
        setTotal(subTotal);
        console.log(total);
    }, [orders]);

    // Hide shop cart if no orders
    useEffect(() => {
        if (Object.keys(orders).length === 0) {
            setIsCartVisible(false);
        }
    }, [orders]);

    const listOrders = orders.map((order) =>
        order.cartID === cart.id
            ? productsItems.map((product) =>
                  order.productID === product.id ? (
                      <ProductBasket
                          product={product}
                          order={order}
                          orders={orders}
                          setOrders={setOrders}></ProductBasket>
                  ) : null,
              )
            : null,
    );

    return (
        <ContainerCart $isVisible={isCartVisible}>
            <ContainerBorder>
                <ContainerGrid>
                    <TitleCart>SHOPPING BAG</TitleCart>
                    <ContainerFixed>
                        <ContainerProducts>{listOrders}</ContainerProducts>
                    </ContainerFixed>
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
