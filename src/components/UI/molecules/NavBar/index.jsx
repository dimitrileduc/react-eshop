import React from "react";

import NavLink from "../../atoms/NavLink";

import {Ul} from "./styles";

function Navbar() {
    return (
        <Ul>
            <li>
                <NavLink to="/products" name="products" />
            </li>
            <li>
                <NavLink to="/contacts" name="contacts" />
            </li>
        </Ul>
    );
}

export default Navbar;
