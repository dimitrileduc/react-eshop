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

function ContentProduct({title, description, category, price, review, stock}) {
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
                <Button>Add to cart</Button>
            </ButtonContainer>
        </Container>
    );
}

export default ContentProduct;
