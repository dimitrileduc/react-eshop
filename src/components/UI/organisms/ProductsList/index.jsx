import React, {useState} from "react";
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

function ProductsList(productsItems, setProductsItems) {
    const [filteredItems, setFilteredItems] = useState(
        productsItems.productsItems,
    );
    const [lastFilteredData, setLastFilteredData] = useState();

    //onClick function to set filter by filterType:keyword
    function setFilter(e) {
        let filter = e.currentTarget.dataset.filter;
        let keyword = e.currentTarget.dataset.keyword;
        // call filter function
        filterFunction(filter, keyword);
        // save last filter by filterType:keyword
        setLastFilteredData([filter, keyword]);
    }

    // function to reset filter
    function resetFilter(e) {
        // detet type filter to reset from button data attr
        let buttonTypefilter = e.currentTarget.dataset.filter;

        // call last filter
        let filter = lastFilteredData[0];
        let keyword = lastFilteredData[1];

        // reset filter with all defaut values
        setFilteredItems(productsItems.productsItems);

        // filter new values from default with the last filter
        if (buttonTypefilter !== lastFilteredData[0]) {
            filterFunction(filter, keyword);
        } else {
            setLastFilteredData([]);
        }
    }

    // filter function
    function filterFunction(filter, keyword) {
        let newItems = filteredItems.filter(function (obj) {
            return obj[filter] === keyword;
        });
        setFilteredItems(newItems);
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
                        {
                            id,
                            title,
                            category,
                            label,
                            description,
                            stock,
                            imageName,
                        },
                    ]) => (
                        <Link to={`/products/${slug}`}>
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
                        </Link>
                    ),
                )}
            </ContainerList>
        </>
    );
}

export default ProductsList;
