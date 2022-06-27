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
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <ContainerGrid>
                    <ContainerMenu>
                        <MenuAccount
                            setSelectedMenuItem={setSelectedMenuItem}
                        />
                    </ContainerMenu>

                    <ContainerLogout>
                        <Button>Logout</Button>
                    </ContainerLogout>

                    <ContainerMain>
                        <MainAccount selectedMenuItem={selectedMenuItem} />
                    </ContainerMain>
                </ContainerGrid>
            </motion.div>
        </ContainerMargin>
    );
}

export default Account;
