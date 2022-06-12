import React, {useState} from "react";

import {
    ContainerMargin,
    ContainerGrid,
    ContainerMenu,
    ContainerLogout,
    ContainerMain,
} from "./styles";

import MenuAccount from "../../UI/molecules/MenuAccount";
import MainAccount from "../../UI/molecules/MainAccount";

function Account(user) {
    const [selectedMenuItem, setSelectedMenuItem] = useState("my orders");

    return (
        <ContainerMargin>
            <ContainerGrid>
                <ContainerMenu>
                    <MenuAccount setSelectedMenuItem={setSelectedMenuItem} />
                </ContainerMenu>

                <ContainerLogout>Logout</ContainerLogout>

                <ContainerMain>
                    <MainAccount selectedMenuItem={selectedMenuItem} />
                </ContainerMain>
            </ContainerGrid>
        </ContainerMargin>
    );
}

export default Account;
