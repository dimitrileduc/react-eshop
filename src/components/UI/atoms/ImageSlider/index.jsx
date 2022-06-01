import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

function Image({ImageJpg, imageWebp}) {
    return (
        <ContainerImage>
            {isWebpSupported() ? (
                <Img alt="pic image of slide" src={imageWebp} />
            ) : (
                <Img alt="pic image of slide" src={ImageJpg} />
            )}
        </ContainerImage>
    );
}

export default Image;
