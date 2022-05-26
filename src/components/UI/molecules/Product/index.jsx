import React from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";

function Product(productsItems) {
    const {slug} = useParams();
    console.log(productsItems.productsItems);

    const product = productsItems.productsItems[slug];
    console.log(product);
    const {title, description} = product;
    return (
        <div style={{padding: 20}}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Product;
