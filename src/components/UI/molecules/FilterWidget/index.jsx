import React from "react";
import {useState} from "react";

import {
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

function FilterWidget() {
    const [filterVisible, setFilterVisible] = useState(false);

    function changeFilterVisible() {
        if (filterVisible === true) {
            setFilterVisible(false);
        } else {
            setFilterVisible(true);
        }
        console.log(filterVisible);
    }
    return (
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
                        <DropDownButton>Select</DropDownButton>
                        <DropDownContent $isRight={false}>
                            <Option>All</Option>
                            <Option>New</Option>
                            <Option>Best Sellers</Option>
                        </DropDownContent>
                    </DropDownLabel>
                </Search>
                <Category>
                    <Input placeholder="search"></Input>
                </Category>
                <Price>
                    <DropDownLabel>
                        <DropDownButton>Category</DropDownButton>
                        <DropDownContent $isRight={true}>
                            <Option>Rose Tea</Option>
                            <Option>Green tea</Option>
                            <Option>Accesories</Option>
                        </DropDownContent>
                    </DropDownLabel>
                </Price>
            </FilterBox>
        </FilterContainer>
    );
}

export default FilterWidget;
