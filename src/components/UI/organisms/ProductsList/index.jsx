import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import {ContainerList} from "./styles";

import ProductShopItem from "../../molecules/ProductShopItem";

import FilterWidget from "../../molecules/FilterWidget";

/*
<li key={slug}>
                            <Link to={`/products/${slug}`}>
                                <h2>{title}</h2>
                                <h3>{category}</h3>
                            </Link>
                        </li>
                    */

function ProductsList(productsItems) {
    //const asArray = Object.entries(productsItems.productsItems);
    console.log(productsItems.productsItems[0]);
    //console.log(typeof productsItems);

    function filterLabel(type, value) {
        var filteredBestSeller = productsItems.productsItems.filter(function (
            obj,
        ) {
            return obj[filter] === keyword;
        });
        console.log(filteredBestSeller);
    }

    var filter = "label";
    var keyword = "Best Seller";

    filterLabel(filter, keyword);

    return (
        <>
            <FilterWidget />
            <ContainerList>
                {Object.entries(productsItems.productsItems).map(
                    ([
                        slug,
                        {title, category, label, description, stock, imageName},
                    ]) => (
                        <ProductShopItem
                            props={{
                                slug,
                                title,
                                category,
                                label,
                                description,
                                stock,
                                imageName,
                            }}
                        />
                    ),
                )}
            </ContainerList>
        </>
    );
}

export default ProductsList;
