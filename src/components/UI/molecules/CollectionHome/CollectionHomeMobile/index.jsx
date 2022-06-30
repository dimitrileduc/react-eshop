import React from "react";

import ImageJpg from "../../../../assets/images/slide3.jpeg";
import ImageWebp from "../../../../assets/images/slide3.webp";

import ImageHome from "../../../atoms/ImageHome";
import {Link} from "react-router-dom";

import {ContainerImage, ContainerButton, Button} from "./styles";

function CollectionHomeMobile() {
    return (
        <>
            <ContainerImage>
                <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
                <ContainerButton>
                    Darjeeling, the most refined and precious Indian black tea
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <Button>Shop All</Button>
                    </Link>
                </ContainerButton>
            </ContainerImage>
        </>
    );
}

export default CollectionHomeMobile;
