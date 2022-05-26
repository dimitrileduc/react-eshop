import React from "react";
import {ReactComponent as Icon} from "../../../assets/icons/user.svg";
import {Button} from "./styles.js";

function IconUser() {
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

export default IconUser;
