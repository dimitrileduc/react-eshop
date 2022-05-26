import React from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";

function ProductsList(productsItems) {
    return (
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
    );
}

export default ProductsList;
