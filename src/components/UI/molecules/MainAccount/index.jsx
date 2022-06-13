import React from "react";

import AccountOrders from "../../organisms/AccountOrders";
import AccountAdresses from "../../organisms/AccountAdresses";
import AccountInfos from "../../organisms/AccountInfos";

function MainAccount({selectedMenuItem}) {
    console.log(selectedMenuItem.name);

    switch (selectedMenuItem.name) {
        case "Infos":
            return <AccountInfos />;
        case "Adresses":
            return <AccountAdresses></AccountAdresses>;
        case "Preferences":
            return <div>Preferences</div>;
        default:
            return <AccountOrders />;
    }
}

export default MainAccount;
