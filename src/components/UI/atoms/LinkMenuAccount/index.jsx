import React from "react";

import {StyledLink} from "./styles";

function LinkMenuAccount({name, setSelectedMenuItem}) {
    function clickItem() {
        setSelectedMenuItem({name});
    }
    return <StyledLink onClick={clickItem}>{name}</StyledLink>;
}

export default LinkMenuAccount;
