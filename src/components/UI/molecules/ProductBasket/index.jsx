import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import Image from "../../atoms/Image";

import {
    Container,
    ImageContainer,
    ContentContainer,
    TitleContainer,
    InfosContainer,
    QuantityContainer,
    PriceContainer,
    ButtonsContainer,
    ButtonLeftContainer,
    ButtonRightContainer,
    Button,
    ButtonQuantityL,
    ButtonQuantityR,
} from "./styles";

function ProductBasket({product, order, orders, setOrders}) {
    // To do check cartId
    function incrQuantity() {
        const nOrders = [];
        orders.forEach(function (element) {
            if (element.productID === product.id) {
                element.quantity += 1;
            }
            nOrders.push(element);
        });
        setOrders(nOrders);
    }

    function decrQuantity() {
        const nOrders = [];
        orders.forEach(function (element) {
            if (element.productID === product.id) {
                if (element.quantity > 1) {
                    element.quantity -= 1;
                }
            }
            nOrders.push(element);
        });
        setOrders(nOrders);
    }

    function removeItem() {
        const nOrders = [];
        orders.forEach(function (element) {
            if (element.productID === product.id) {
            } else {
                nOrders.push(element);
            }
        });
        setOrders(nOrders);
    }

    return (
        <>
            <Container>
                <ImageContainer>
                    <Image imageName={product.imageName} />
                </ImageContainer>
                <ContentContainer>
                    <TitleContainer>{product.title}</TitleContainer>
                    <InfosContainer>
                        <QuantityContainer>
                            <ButtonQuantityL onClick={decrQuantity}>
                                -
                            </ButtonQuantityL>
                            {order.quantity}
                            <ButtonQuantityR onClick={incrQuantity}>
                                +
                            </ButtonQuantityR>
                        </QuantityContainer>
                        <PriceContainer>
                            {product.price * order.quantity}
                        </PriceContainer>
                    </InfosContainer>
                    <ButtonsContainer>
                        <ButtonLeftContainer>
                            <Link to={`/products/${product.slug}`}>
                                <Button>View</Button>
                            </Link>
                        </ButtonLeftContainer>
                        <ButtonRightContainer>
                            <Button onClick={removeItem}>Remove</Button>
                        </ButtonRightContainer>
                    </ButtonsContainer>
                </ContentContainer>
            </Container>
        </>
    );
}

export default ProductBasket;
