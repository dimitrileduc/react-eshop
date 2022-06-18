import React from "react";

import {Input} from "./styles";

function InputForm({holder, type}) {
    return (
        <Input aria-label={holder} placeholder={holder} type={type} required />
    );
}

export default InputForm;
