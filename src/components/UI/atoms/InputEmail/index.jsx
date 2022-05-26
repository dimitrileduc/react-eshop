import React from "react";
import {Input} from "./styles";

function InputEmail() {
    return (
        <Input
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="email for newsletter"></Input>
    );
}

export default InputEmail;
