import React from "react";
import IconUser from "../../atoms/Icons/iconUser";
import IconBasket from "../../atoms/Icons/iconBasket";
import {Container} from "./styles";

import {BrowserRouter, Route, Link} from "react-router-dom";

function IconsGroup() {
    return (
        <Container>
            <Link to="/myaccount">
                <IconUser />
            </Link>
            <IconBasket />
        </Container>
    );
}

export default IconsGroup;
