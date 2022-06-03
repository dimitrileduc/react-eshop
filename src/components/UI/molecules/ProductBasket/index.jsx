import React from "react";

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
} from "./styles";

function ProductBasket({product, basket, setBasket, quantity}) {
    function removeItem(e) {
        let newArray = [];
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
            } else {
                newArray.push(element);
            }
            setBasket(newArray);
        });
    }
    console.log("title" + product.title);
    console.log("quantity" + quantity);

    return (
        <>
            <Container>
                <ImageContainer>Image</ImageContainer>
                <ContentContainer>
                    <TitleContainer>{product.title}</TitleContainer>
                    <InfosContainer>
                        <QuantityContainer>{quantity}</QuantityContainer>
                        <PriceContainer>24 Eur</PriceContainer>
                    </InfosContainer>
                    <ButtonsContainer>
                        <ButtonLeftContainer>
                            <Button>View</Button>
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
