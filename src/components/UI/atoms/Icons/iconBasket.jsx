import React from "react";
import {ReactComponent as Icon} from "../../../assets/icons/basket.svg";
import {Button} from "./styles.js";

function IconBasket() {
    return (
        <Button>
            <Icon
                style={{
                    width: "24px",
                    height: "24px",
                }}
            />
        </Button>
    );
}

export default IconBasket;
