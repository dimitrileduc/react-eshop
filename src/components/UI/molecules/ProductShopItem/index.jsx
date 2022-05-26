import React from "react";
import {
    ProductContainer,
    ImageContainer,
    LabelContainer,
    InfosContainer,
    TitleContainer,
    CategoryContainer,
    PriceContainer,
    Label,
    Title,
    Category,
} from "./styles.js";

import ImageJpg from "../../../assets/imagesProducts/roseTea.jpg";
import ImageWebp from "../../../assets/imagesProducts/roseTea.webp";

import Image from "../../atoms/Image/index.jsx";

function ProductShopItem() {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </ImageContainer>
            <LabelContainer>
                <Label>Label</Label>
            </LabelContainer>
            <InfosContainer>
                <TitleContainer>
                    <Title>Rose Tea</Title>
                </TitleContainer>
                <CategoryContainer>
                    <Category>Category</Category>
                </CategoryContainer>
                <PriceContainer>Price</PriceContainer>
            </InfosContainer>
        </ProductContainer>
    );
}

export default ProductShopItem;
