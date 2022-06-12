import React from "react";
import {ContainerMargin} from "./styles";

function MainAccount({selectedMenuItem}) {
    console.log(selectedMenuItem.name);

    switch (selectedMenuItem.name) {
        case "Infos":
            return <div>Infos</div>;
        case "Adresses":
            return <div>Adresses</div>;
        case "Preferences":
            return <div>Preferences</div>;
        default:
            return <div>Orders</div>;
    }
}

export default MainAccount;
