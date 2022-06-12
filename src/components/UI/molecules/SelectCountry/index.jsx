import React, {useState, useMemo} from "react";

import countryList from "react-select-country-list";

import {SelectStyled} from "./styles";

function SelectCountry() {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
        setValue(value);
    };

    return (
        <SelectStyled
            options={options}
            value={value}
            onChange={changeHandler}
        />
    );
}

export default SelectCountry;
