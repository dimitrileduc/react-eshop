import React from "react";

import {P} from "./styles";
import SuscribeItem from "../SuscribeItem";

function SuscribeFooter() {
    return (
        <>
            <P>
                Sign up for the newsletter and be the first to hear about new
                products, news and promotions.
            </P>
            <SuscribeItem></SuscribeItem>
        </>
    );
}

export default SuscribeFooter;
