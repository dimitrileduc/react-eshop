import React, {useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import {ContainerList} from "./styles";

import ProductShopItem from "../../molecules/ProductShopItem";

import FilterWidget from "../../molecules/FilterWidget";
import {useEffect} from "react";

/*
<li key={slug}>
                            <Link to={`/products/${slug}`}>
                                <h2>{title}</h2>
                                <h3>{category}</h3>
                            </Link>
                        </li>
                    */

function ProductsList(productsItems, setProductsItems) {
    const [filteredItems, setFilteredItems] = useState(
        productsItems.productsItems,
    );
    const [lastFilteredData, setLastFilteredData] = useState();
    //const asArray = Object.entries(productsItems.productsItems);
    //console.log(productsItems.productsItems[0]);
    //console.log(typeof productsItems);

    //filterLabel(filter, keyword);
    function setFilter(e) {
        //console.log(e.currentTarget.dataset.val);
        let filter = e.currentTarget.dataset.filter;
        let keyword = e.currentTarget.dataset.keyword;
        console.log(filter);
        console.log(keyword);
        console.log("onClick");
        let newItems = filteredItems.filter(function (obj) {
            return obj[filter] === keyword;
        });
        setFilteredItems(newItems);
        setLastFilteredData([filter, keyword]);
    }

    function resetFilter(e) {
        let buttonTypefilter = e.currentTarget.dataset.filter;
        console.log("data to maitain in filter is " + buttonTypefilter);

        console.log("last filtering type" + lastFilteredData[0]);
        console.log("last filtering keyword" + lastFilteredData[1]);

        setFilteredItems(productsItems.productsItems);

        if (buttonTypefilter !== lastFilteredData[0]) {
            let newItems = filteredItems.filter(function (obj) {
                return obj[lastFilteredData[0]] === lastFilteredData[1];
            });
            setFilteredItems(newItems);
        }
    }

    return (
        <>
            <FilterWidget />
            <button onClick={setFilter} data-filter="label" data-keyword="New">
                New
            </button>
            <button
                onClick={setFilter}
                data-filter="category"
                data-keyword="Darjeeling tea">
                Darlejing
            </button>
            <button data-filter="label" onClick={resetFilter}>
                All Label
            </button>
            <button data-filter="category" onClick={resetFilter}>
                All Category
            </button>
            <ContainerList>
                {Object.entries(filteredItems).map(
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
