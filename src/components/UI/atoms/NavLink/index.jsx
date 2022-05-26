import React from "react";
import {StyledLink} from "./styles";

function NavLink({to, name}) {
    return <StyledLink to={to}> {name}</StyledLink>;
}

export default NavLink;
