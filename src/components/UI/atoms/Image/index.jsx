import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

function Image({imageName}) {
    const baseUrl = "./";
    const jpegLink = baseUrl + imageName + ".jpg";
    const webpLink = baseUrl + imageName + ".webp";

    //console.log("?" + jpegLink);
    //console.log(webpLink);

    function getJpg(img) {
        return require(`${img}`);
    }

    function getWebp(img) {
        return require(`${img}`);
    }

    return (
        <ContainerImage>
            {isWebpSupported() ? (
                <Img alt="pic image of slide" src={getWebp(webpLink)} />
            ) : (
                <Img alt="pic image of slide" src={getJpg(jpegLink)} />
            )}
        </ContainerImage>
    );
}

export default Image;

//return <LogoStyled>{name}</LogoStyled>;
/*
{isWebpSupported() ? (
                <Img alt="pic image of slide" src={getWebp(imageWebp)} />
            ) : (
                <Img alt="pic image of slide" src={getJpg(imageJpg)} />
            )}*/
