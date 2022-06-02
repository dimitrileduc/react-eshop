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

function ProductBasket() {
    return (
        <>
            <Container>
                <ImageContainer>Image</ImageContainer>
                <ContentContainer>
                    <TitleContainer>The Delhi Sultanate</TitleContainer>
                    <InfosContainer>
                        <QuantityContainer>Quantity : 2 </QuantityContainer>
                        <PriceContainer>24 Eur</PriceContainer>
                    </InfosContainer>
                    <ButtonsContainer>
                        <ButtonLeftContainer>
                            <Button>View</Button>
                        </ButtonLeftContainer>
                        <ButtonRightContainer>
                            <Button>Remove</Button>
                        </ButtonRightContainer>
                    </ButtonsContainer>
                </ContentContainer>
            </Container>
            <Container>
                <ImageContainer>Image</ImageContainer>
                <ContentContainer>
                    <TitleContainer>The Delhi Sultanate</TitleContainer>
                    <InfosContainer>
                        <QuantityContainer>Quantity : 2</QuantityContainer>
                        <PriceContainer>24 Eur</PriceContainer>
                    </InfosContainer>
                    <ButtonsContainer>
                        <ButtonLeftContainer>
                            <Button>View</Button>
                        </ButtonLeftContainer>
                        <ButtonRightContainer>
                            <Button>Remove</Button>
                        </ButtonRightContainer>
                    </ButtonsContainer>
                </ContentContainer>
            </Container>
        </>
    );
}

export default ProductBasket;
