import React from "react";
import {ReactComponent as Icon} from "../../../assets/icons/shop.svg";
import {Button} from "./styles.js";

function IconShop() {
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

export default IconShop;
