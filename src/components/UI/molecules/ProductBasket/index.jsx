import React, {useState} from "react";
import {Link} from "react-router-dom";

import Image from "../../atoms/Image";

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
    ButtonQuantityL,
    ButtonQuantityR,
} from "./styles";

function ProductBasket({product, basket, setBasket, quantity}) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const [currentPrice, setCurrentPrice] = useState(product.price);
    function removeItem(e) {
        const newArray = [];
        // TO DO : convert to .map function
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

    function incrQuantity() {
        const newArray = [];
        // TO DO : convert to .map function
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
                element.quantity += 1;
                setCurrentQuantity(element.quantity);
                const newPrice = currentPrice + product.price;
                setCurrentPrice(newPrice);
            } else {
            }
            newArray.push(element);
            setBasket(newArray);
        });
    }

    function decrQuantity() {
        const newArray = [];
        // TO DO : convert to .map function
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
                if (element.quantity > 0) {
                    element.quantity -= 1;
                    setCurrentQuantity(element.quantity);
                    const newPrice = currentPrice - product.price;
                    setCurrentPrice(newPrice);
                }
            } else {
            }
            newArray.push(element);
            setBasket(newArray);
        });
        if (currentPrice === 0) {
            removeItem();
        }
    }

    return (
        <>
            <Container>
                <ImageContainer>
                    <Image imageName={product.imageName} />
                </ImageContainer>
                <ContentContainer>
                    <TitleContainer>{product.title}</TitleContainer>
                    <InfosContainer>
                        <QuantityContainer>
                            <ButtonQuantityL onClick={decrQuantity}>
                                -
                            </ButtonQuantityL>
                            {currentQuantity}
                            <ButtonQuantityR onClick={incrQuantity}>
                                +
                            </ButtonQuantityR>
                        </QuantityContainer>
                        <PriceContainer>€{currentPrice}</PriceContainer>
                    </InfosContainer>
                    <ButtonsContainer>
                        <ButtonLeftContainer>
                            <Link to={`/products/${product.slug}`}>
                                <Button>View</Button>
                            </Link>
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
