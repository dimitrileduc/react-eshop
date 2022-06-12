import React from "react";
import LinkMenuAccount from "../../atoms/LinkMenuAccount";
import {ContainerMenu} from "./styles";
function MenuAccount({setSelectedMenuItem}) {
    return (
        <ContainerMenu>
            <LinkMenuAccount
                name={"Orders"}
                setSelectedMenuItem={setSelectedMenuItem}
            />
            <LinkMenuAccount
                name={"Adresses"}
                setSelectedMenuItem={setSelectedMenuItem}
            />
            <LinkMenuAccount
                name={"Infos"}
                setSelectedMenuItem={setSelectedMenuItem}
            />
            <LinkMenuAccount
                name={"Preferences"}
                setSelectedMenuItem={setSelectedMenuItem}
            />
        </ContainerMenu>
    );
}

export default MenuAccount;
