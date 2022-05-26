import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

function Image({imamgeJpg, imageWebp}) {
    return (
        <ContainerImage>
            {isWebpSupported() ? (
                <Img alt="pic image of slide" src={imageWebp} />
            ) : (
                <Img alt="pic image of slide" src={imamgeJpg} />
            )}
        </ContainerImage>
    );
}

export default Image;

//return <LogoStyled>{name}</LogoStyled>;
