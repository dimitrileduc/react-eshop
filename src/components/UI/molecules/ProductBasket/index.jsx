import React, {useState, useEffect} from "react";
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

function ProductBasket({
    product,
    basket,
    setBasket,
    quantity,
    changeQuantityIsFromBasket,
    setChangeQuantityIsFromBasket,
}) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const [currentPrice, setCurrentPrice] = useState(product.price);

    // if basket state change --> update currentQuantity and currentPrice
    useEffect(() => {
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
                setCurrentQuantity(element.quantity);

                // Check if quantity change is from this component or if product is added from single product page
                // if from product page => incr price
                if (!changeQuantityIsFromBasket) {
                    const newPrice = currentPrice + product.price;
                    setCurrentPrice(newPrice);
                }
            }
        });
    }, [basket]);

    // remove item from basket
    function removeItem(e) {
        const newArray = [];
        // TO DO : convert to .map function
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
            } else {
                newArray.push(element);
            }
        });
        setBasket(newArray);
    }

    // incr quantity
    function incrQuantity() {
        setChangeQuantityIsFromBasket(true);
        const newArray = [];
        // TO DO : convert to .map function
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
                element.quantity += 1;

                const newPrice = currentPrice + product.price;
                setCurrentPrice(newPrice);
            } else {
            }
            newArray.push(element);
            setBasket(newArray);
        });
    }

    // decr quantity
    function decrQuantity() {
        setChangeQuantityIsFromBasket(true);
        const newArray = [];
        // TO DO : convert to .map function
        basket.forEach(function (element) {
            if (element.product.title === product.title) {
                if (element.quantity > 1) {
                    element.quantity -= 1;

                    const newPrice = currentPrice - product.price;
                    setCurrentPrice(newPrice);
                }
            } else {
            }
            newArray.push(element);
            setBasket(newArray);
        });
        if (currentPrice === 0) {
            //removeItem();
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
