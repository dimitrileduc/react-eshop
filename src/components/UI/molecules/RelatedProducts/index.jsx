import React from "react";

import {Container, Product1, Product2, Product3} from "./styles";

import ImageJpg from "../../../assets/imagesProducts/roseTea.jpg";
import ImageWebp from "../../../assets/imagesProducts/roseTea.webp";

import Image from "../../atoms/Image/index.jsx";

function RelatedProducts() {
    return (
        <Container>
            <Product1>
                <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </Product1>
            <Product2>
                <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </Product2>
            <Product3>
                <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </Product3>
        </Container>
    );
}

export default RelatedProducts;
