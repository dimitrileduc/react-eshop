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

function ContentProduct() {
    return (
        <Container>
            <TitleContainer>
                <Title>Chai Tai tea</Title>
            </TitleContainer>
            <CategoryContainer>
                <Category>Rose tea category</Category>
            </CategoryContainer>
            <DescriptionContainer>
                <Description>
                    This formula offers non-greasy hydration that acts as a
                    direct topical supplement of impaired NMF components. It
                    contains 11 amino acids, phospholipids, alpha/beta/gamma
                    fatty acids, triglycerides, sterols and sterol esters,
                    glycerin, ceramide precursors, urea, saccharides, sodium PCA
                    and hyaluronic acid. It offers immediate hydration and
                    lasting results with continued use.
                </Description>
            </DescriptionContainer>
            <PriceContainer>
                <Price>24.80 EUR</Price>
            </PriceContainer>
            <ButtonContainer>
                <Button>Add to cart</Button>
            </ButtonContainer>
        </Container>
    );
}

export default ContentProduct;
