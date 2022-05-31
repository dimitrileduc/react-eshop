import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    ContainerList,
    FilterContainer,
    Label,
    Filter,
    FilterBox,
    Search,
    Category,
    Price,
    DropDownLabel,
    DropDownButton,
    DropDownContent,
    Option,
    FilterButton,
    Input,
} from "./styles";
import ProductShopItem from "../../molecules/ProductShopItem";

function ProductsList(productsItems, setProductsItems) {
    const [filteredItems, setFilteredItems] = useState(
        productsItems.productsItems,
    );

    const [filteredItemsByLabel, setFilteredItemsByLabel] = useState(
        productsItems.productsItems,
    );
    const [filteredItemsByCategory, setFilteredItemsByCategory] = useState(
        productsItems.productsItems,
    );

    const [selectedLabel, setSelectedLabel] = useState("option");

    const [filterVisible, setFilterVisible] = useState(false);

    function changeFilterVisible() {
        if (filterVisible === true) {
            setFilterVisible(false);
        } else {
            setFilterVisible(true);
        }
        console.log(filterVisible);
    }

    function setFilter(e) {
        const filter = e.currentTarget.dataset.filter;
        const keyword = e.currentTarget.dataset.keyword;

        setFilteredItems(productsItems.productsItems);
        console.log("current Filtered items " + productsItems.productsItems);

        if (filter === "label") {
            setSelectedLabel(keyword);
            filterByLabel(filter, keyword);
        }
        if (filter === "category") {
            console.log("filter is category");
            filterByCategory(filter, keyword);
        }
    }

    function resetLabelFilter() {
        setFilteredItemsByLabel(productsItems.productsItems);
        setFilteredItems(filteredItemsByCategory);
    }

    /*
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
        // detect type filter to reset from button dataset
        let buttonTypefilter = e.currentTarget.dataset.filter;

        // call last filter
        let filter = lastFilteredData[0];
        let keyword = lastFilteredData[1];

        // reset filter with all defaut values
        setFilteredItems(productsItems.productsItems);
        console.log("DIFF" + buttonTypefilter + " " + lastFilteredData[0]);
        // filter new values from default with the last filter
        if (buttonTypefilter !== lastFilteredData[0]) {
            filterFunction(filter, keyword);
        } else {
            setLastFilteredData([]);
        }
    }
*/
    // filter function
    function filterByLabel(filter, keyword) {
        let newItems = filteredItemsByCategory.filter(function (obj) {
            return obj[filter] === keyword;
        });
        console.log(newItems + " Newitems");
        setFilteredItemsByLabel(newItems);
        setFilteredItems(newItems);
    }

    function filterByCategory(filter, keyword) {
        let newItems = filteredItemsByLabel.filter(function (obj) {
            return obj[filter] === keyword;
        });
        console.log(newItems + " Newitems");
        setFilteredItemsByCategory(newItems);
        setFilteredItems(newItems);
    }

    if (filteredItems) {
        return (
            <>
                <FilterContainer>
                    <Label></Label>
                    <Filter>
                        <FilterButton onClick={changeFilterVisible}>
                            Filter
                        </FilterButton>
                    </Filter>
                    <FilterBox $visible={filterVisible}>
                        <Search>
                            <DropDownLabel>
                                <DropDownButton>
                                    Select {selectedLabel}
                                </DropDownButton>
                                <DropDownContent $isRight={false}>
                                    <Option onClick={resetLabelFilter}>
                                        All
                                    </Option>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="label"
                                        data-keyword="New">
                                        New
                                    </Option>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="label"
                                        data-keyword="Best Seller">
                                        Best Sellers
                                    </Option>
                                </DropDownContent>
                            </DropDownLabel>
                        </Search>
                        <Category>
                            <Input
                                aria-label="search filter for products"
                                placeholder="search"></Input>
                        </Category>
                        <Price>
                            <DropDownLabel>
                                <DropDownButton>Category</DropDownButton>
                                <DropDownContent $isRight={true}>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="category"
                                        data-keyword="Chai tea">
                                        Chai tea
                                    </Option>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="category"
                                        data-keyword="Flavoured tea">
                                        Flavoured tea
                                    </Option>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="category"
                                        data-keyword="Darjeeling tea">
                                        Darjeeling tea
                                    </Option>
                                    <Option
                                        onClick={setFilter}
                                        data-filter="category"
                                        data-keyword="Accessoiries">
                                        Accessoiries
                                    </Option>
                                </DropDownContent>
                            </DropDownLabel>
                        </Price>
                    </FilterBox>
                </FilterContainer>

                <ContainerList>
                    {Object.entries(filteredItems).map(
                        ([
                            slug,
                            {
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
}

export default ProductsList;
