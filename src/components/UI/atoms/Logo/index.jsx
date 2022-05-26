import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

function Logo({logoPng, logoWebp}) {
    return (
        <ContainerImage>
            {isWebpSupported() ? (
                <Img alt="pic image of website company" src={logoWebp} />
            ) : (
                <Img alt="pic image of website company" src={logoPng} />
            )}
        </ContainerImage>
    );
}

export default Logo;

//return <LogoStyled>{name}</LogoStyled>;
