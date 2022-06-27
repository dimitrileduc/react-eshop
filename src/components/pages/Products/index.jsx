import React from "react";
import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import TransitionExit from "../../transitions/TransitionExit";

import {Container} from "./styles";

function Products({pageName}) {
    return (
        <>
            <Container>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                    <div>Products</div>

                    <Outlet />
                </motion.div>
            </Container>
        </>
    );
}

export default Products;

// <Transition />
