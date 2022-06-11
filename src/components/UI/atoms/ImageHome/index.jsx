import React from "react";
import {ContainerImage} from "./styles";

import {isWebpSupported} from "react-image-webp/dist/utils";

import {Img} from "./styles";

// import {roseTea as ImageTest} from "../../../assets/imagesProducts/roseTea.jpg";

function ImageHome({imageWebp, imageJpg}) {
    //console.log("?" + jpegLink);
    //console.log(webpLink);

    return (
        <ContainerImage>
            {isWebpSupported() ? (
                <Img alt="pic image of slide" src={imageWebp} />
            ) : (
                <Img alt="pic image of slide" src={imageJpg} />
            )}
        </ContainerImage>
    );
}

export default ImageHome;

//return <LogoStyled>{name}</LogoStyled>;
/*
{isWebpSupported() ? (
                <Img alt="pic image of slide" src={getWebp(imageWebp)} />
            ) : (
                <Img alt="pic image of slide" src={getJpg(imageJpg)} />
            )}*/
