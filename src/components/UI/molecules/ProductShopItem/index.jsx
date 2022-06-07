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

import Image from "../../atoms/Image/index.jsx";

function ProductShopItem(props) {
    console.log("props + " + JSON.stringify(props.props));
    /*
    const baseUrl = "../../../assets/imagesProducts/";
    const jpegLink = baseUrl + props.props.imageName + ".jpg";
    const webpLink = baseUrl + props.props.imageName + ".webp";

    console.log("?" + jpegLink);
    console.log(webpLink);
    */
    //console.log(JSON.stringify(props.props));
    //<Image imageJpg={jpegLink} imageWebp={webpLink} />
    return (
        <ProductContainer>
            <ImageContainer>
                <Image imageName={props.props.imageName} />
            </ImageContainer>
            <LabelContainer>
                <Label>{props.props.label}</Label>
            </LabelContainer>
            <InfosContainer>
                <TitleContainer>
                    <Title>{props.props.title}</Title>
                </TitleContainer>
                <CategoryContainer>
                    <Category>{props.props.category}</Category>
                </CategoryContainer>
                <PriceContainer>{props.props.price} Eur</PriceContainer>
            </InfosContainer>
        </ProductContainer>
    );
}

export default ProductShopItem;
