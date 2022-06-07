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

function Product({productsItems, setOrders, setIsCartVisible, cart, orders}) {
    const {slug} = useParams();
    console.log(productsItems);

    const product = productsItems[slug];
    console.log(product);
    const {
        id,
        title,
        description,
        label,
        category,
        price,
        review,
        stock,
        imageName,
    } = product;

    console.log(label);
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
                    <ContainerImage>
                        <Image imageName={imageName} />
                    </ContainerImage>
                    <Label>
                        <LabelStyled>{label}</LabelStyled>
                    </Label>
                    <ContainerContent>
                        <ContentProduct
                            id={id}
                            title={title}
                            description={description}
                            category={category}
                            price={price}
                            review={review}
                            stock={stock}
                            setIsCartVisible={setIsCartVisible}
                            setOrders={setOrders}
                            cart={cart}
                            orders={orders}
                        />
                    </ContainerContent>
                    <ContainerRelated></ContainerRelated>
                </ContainerGrid>
            </ContainerProduct>
        </>
    );
}

export default Product;
