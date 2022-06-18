import React, {useState} from "react";

import {
    ContainerMargin,
    ContainerGrid,
    ContainerMenu,
    ContainerLogout,
    ContainerMain,
    Button,
} from "./styles";

import {motion} from "framer-motion";

import MenuAccount from "../../UI/molecules/MenuAccount";
import MainAccount from "../../UI/molecules/MainAccount";
import FormAuth from "../../UI/organisms/FormAuth";

function Account({isLogged, setIsLogged}) {
    const [selectedMenuItem, setSelectedMenuItem] = useState("my orders");
    console.log(setIsLogged);

    if (!isLogged) {
        return <FormAuth setIsLogged={setIsLogged} />;
    }

    return (
        <ContainerMargin>
            <ContainerGrid>
                <ContainerMenu>
                    <MenuAccount setSelectedMenuItem={setSelectedMenuItem} />
                </ContainerMenu>

                <ContainerLogout>
                    <Button>Logout</Button>
                </ContainerLogout>

                <ContainerMain>
                    <MainAccount selectedMenuItem={selectedMenuItem} />
                </ContainerMain>
            </ContainerGrid>
        </ContainerMargin>
    );
}

export default Account;
