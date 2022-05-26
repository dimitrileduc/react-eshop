import React from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";

function IconsGroup() {
    return (
        <Container>
            <IconUser />
            <IconBasket />
        </Container>
    );
}

export default IconsGroup;
