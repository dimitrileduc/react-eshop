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
} from "./styles";

function ProductBasket() {
    return (
        <Container>
            <ImageContainer>Image</ImageContainer>
            <ContentContainer>
                <TitleContainer>Title</TitleContainer>
                <InfosContainer>
                    <QuantityContainer>Quantity</QuantityContainer>
                    <PriceContainer>Price</PriceContainer>
                </InfosContainer>
                <ButtonsContainer>
                    <ButtonLeftContainer>Left B</ButtonLeftContainer>
                    <ButtonRightContainer>Right B</ButtonRightContainer>
                </ButtonsContainer>
            </ContentContainer>
        </Container>
    );
}

export default ProductBasket;
