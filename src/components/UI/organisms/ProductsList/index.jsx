import React from "react";

import {ContainerList} from "./styles";

import ProductShopItem from "../../molecules/ProductShopItem";

function ProductsList(productsItems) {
    ///// test purpose
    let numberProducts = 2;
    let numberRows;
    if (numberProducts % 4 === 0) {
        numberRows = numberProducts / 4;
        console.log("nb columns -> " + numberRows);
    } else {
        numberRows = Math.ceil(numberProducts / 4);
        console.log("nb columns -> " + numberRows);
    }

    /////

    return (
        /*
        <ul>
            {Object.entries(productsItems.productsItems).map(
                ([slug, {title}]) => (
                    <li key={slug}>
                        <Link to={`/products/${slug}`}>
                            <h3>{title}</h3>
                        </Link>
                    </li>
                ),
            )}
        </ul>
        */
        <ContainerList>
            <ProductShopItem></ProductShopItem>
            <ProductShopItem></ProductShopItem>
            <ProductShopItem></ProductShopItem>
            <ProductShopItem></ProductShopItem>
            <ProductShopItem></ProductShopItem>
        </ContainerList>
    );
}

export default ProductsList;
