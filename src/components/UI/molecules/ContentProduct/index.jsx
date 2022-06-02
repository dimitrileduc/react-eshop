import React from "react";

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
    title,
    description,
    category,
    price,
    review,
    stock,
    setBasket,
    basket,
    imageName,
}) {
    function addToBasket(e) {
        let isPresent = false;
        let newArray = [];
        basket.forEach(function (element) {
            if (element.product.title === title) {
                isPresent = true;
                console.log("is object present in basket" + isPresent);
                element.quantity += 1;
            }
            newArray.push(element);
        });
        if (isPresent === true) {
            setBasket(newArray);
        }
        if (isPresent === false) {
            //console.log(basket.some((item) => item.a === "b"));
            const newBasketItem = {
                product: {title: title, imageName: imageName},
                quantity: 1,
            };
            setBasket((oldArray) => oldArray.concat(newBasketItem));
            //setBasket([...basket, newBasketItem]);
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
                <Price>{price} EUR</Price>
            </PriceContainer>
            <ButtonContainer>
                <Button onClick={addToBasket}>Add to cart</Button>
            </ButtonContainer>
        </Container>
    );
}

export default ContentProduct;
