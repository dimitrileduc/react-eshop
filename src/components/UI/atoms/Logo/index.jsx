import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

import {Link} from "react-router-dom";

function Logo({logoPng, logoWebp}) {
    return (
        <ContainerImage>
            <Link to="/" style={{textDecoration: "none"}}>
                {isWebpSupported() ? (
                    <Img alt="pic image of website company" src={logoWebp} />
                ) : (
                    <Img alt="pic image of website company" src={logoPng} />
                )}
            </Link>
        </ContainerImage>
    );
}

export default Logo;

//return <LogoStyled>{name}</LogoStyled>;
