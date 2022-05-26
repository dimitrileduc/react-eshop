import React from "react";

import {Container} from "./styles";

import InputEmail from "../../atoms/InputEmail";
import SuscribeButton from "../../atoms/SuscribeButton";
function SuscribeItem() {
    return (
        <Container>
            <InputEmail />

            <SuscribeButton />
        </Container>
    );
}

export default SuscribeItem;
