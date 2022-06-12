import React from "react";
import {ReactComponent as IconeBasket} from "../../../assets/icons/basket.svg";
import {ReactComponent as IconeClose} from "../../../assets/icons/close.svg";
import {Button} from "./styles.js";

function IconBasket({setIsCartVisible, isCartVisible}) {
    function handleClick() {
        setIsCartVisible((prev) => !prev);
    }
    let icon;
    if (isCartVisible) {
        icon = (
            <IconeClose
                onClick={handleClick}
                style={{
                    width: "24px",
                    height: "24px",
                }}
            />
        );
    } else {
        icon = (
            <IconeBasket
                onClick={handleClick}
                style={{
                    width: "24px",
                    height: "24px",
                    fill: "ECECEC",
                }}
            />
        );
    }

    return <Button>{icon}</Button>;
}

export default IconBasket;
