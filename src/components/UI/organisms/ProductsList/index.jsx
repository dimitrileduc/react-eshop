import React, {useState, useEffect} from "react";
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

    const [searchInputValue, setSearchInputValue] = useState("");
    const [foundItems, setFoundItems] = useState(filteredItems);

    //     set search query to empty string
    const [q, setQ] = useState("");

    const [searchParam] = useState(["title"]);

    // Display/Hide Filter bar

    function changeFilterVisible() {
        if (filterVisible === true) {
            setFilterVisible(false);
        } else {
            setFilterVisible(true);
        }
    }

    // Set Filter

    function setFilter(e) {
        const filter = e.currentTarget.dataset.filter;
        const keyword = e.currentTarget.dataset.keyword;

        setFilteredItems(productsItems.productsItems);

        if (filter === "label") {
            setSelectedLabel(keyword);
            filterByLabel(filter, keyword);
        }
        if (filter === "category") {
            filterByCategory(filter, keyword);
        }
    }

    // filter function
    function filterByLabel(filter, keyword) {
        let newItems = filteredItemsByCategory.filter(function (obj) {
            return obj[filter] === keyword;
        });

        setFilteredItemsByLabel(newItems);
        setFilteredItems(newItems);
    }

    function filterByCategory(filter, keyword) {
        let newItems = filteredItemsByLabel.filter(function (obj) {
            return obj[filter] === keyword;
        });

        setFilteredItemsByCategory(newItems);
        setFilteredItems(newItems);
    }

    function setFilterReset() {
        setFilteredItems(productsItems.productsItems);
    }

    function onChangeInput(e) {
        setQ(e.target.value);
    }

    ///////////////////////// Filter Search

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
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
                            <Input
                                aria-label="search filter for products"
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                onChange={onChangeInput}></Input>
                        </Search>
                        <Category></Category>
                        <Price>
                            <DropDownLabel>
                                <DropDownButton>Category</DropDownButton>
                                <DropDownContent $isRight={true}>
                                    <Option onClick={setFilterReset}>
                                        All
                                    </Option>
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
                    {Object.entries(search(filteredItems)).map(
                        ([
                            slug,
                            {
                                title,
                                category,
                                label,
                                description,
                                stock,
                                imageName,
                                price,
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
                                        price,
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

/* module for label search 
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


*/
