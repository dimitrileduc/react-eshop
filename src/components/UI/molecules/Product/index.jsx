import React from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {
    ContainerProduct,
    ContainerGrid,
    ContainerImage,
    Label,
    ContainerContent,
    ContainerRelated,
    LabelStyled,
} from "./styles";

import ImageJpg from "../../../assets/imagesProducts/roseTea.jpg";
import ImageWebp from "../../../assets/imagesProducts/roseTea.webp";

import Image from "../../atoms/Image/index.jsx";

import ContentProduct from "../ContentProduct";
import RelatedProducts from "../RelatedProducts";

function Product(productsItems) {
    const {slug} = useParams();
    console.log(productsItems.productsItems);

    const product = productsItems.productsItems[slug];
    console.log(product);
    const {title, description} = product;
    // <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
    return (
        /*
        <div style={{padding: 20}}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        */
        <>
            <div>Back</div>
            <ContainerProduct>
                <ContainerGrid>
                    <ContainerImage></ContainerImage>
                    <Label>
                        <LabelStyled>LABEL</LabelStyled>
                    </Label>
                    <ContainerContent>
                        <ContentProduct />
                    </ContainerContent>
                    <ContainerRelated></ContainerRelated>
                </ContainerGrid>
            </ContainerProduct>
        </>
    );
}

export default Product;
