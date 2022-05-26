import React from "react";
import {ReactComponent as Icon} from "../../../assets/icons/info.svg";
import {Button} from "./styles.js";

function IconInfo() {
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

export default IconInfo;
