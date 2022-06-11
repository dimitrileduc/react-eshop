import React from "react";
import uuid from "react-uuid";

import {
    Container,
    TitleContainer,
    CategoryContainer,
    DescriptionContainer,
    PriceContainer,
    ButtonContainer,
    Title,
    Category,
    Description,
    Price,
    Button,
} from "./styles";

function ContentProduct({
    id,
    title,
    description,
    category,
    price,
    setIsCartVisible,
    setOrders,
    cart,
    orders,
}) {
    function addToBasket(e) {
        setIsCartVisible(true);

        // check if order already exist in orders
        const checkProductId = (obj) => obj.productID === id;

        // if exist : increment quantity . Else : add new order to cart
        if (orders.some(checkProductId)) {
            const nOrders = [];
            orders.forEach(function (element) {
                if (element.productID === id) {
                    element.quantity += 1;
                }
                nOrders.push(element);
            });
            setOrders(nOrders);
        } else {
            const newOrder = {
                id: uuid(),
                productID: id,
                cartID: cart.id,
                quantity: 1,
            };
            setOrders((oldArray) => oldArray.concat(newOrder));
        }
    }

    return (
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <CategoryContainer>
                <Category>{category}</Category>
            </CategoryContainer>
            <DescriptionContainer>
                <Description>{description}</Description>
            </DescriptionContainer>
            <PriceContainer>
                <Price>€{price}</Price>
            </PriceContainer>
            <ButtonContainer>
                <Button onClick={addToBasket}>Add to cart</Button>
            </ButtonContainer>
        </Container>
    );
}

export default ContentProduct;
