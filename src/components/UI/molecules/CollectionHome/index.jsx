import React from "react";
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

import {Link} from "react-router-dom";

import {
    Container,
    ContainerLeft,
    ContainerText,
    ContainerButton,
    ContainerRight,
    Button,
} from "./styles";

import ImageJpg from "../../../assets/images/slide6.jpg";
import ImageWebp from "../../../assets/images/slide6.webp";

import ImageHome from "../../atoms/ImageHome";

function CollectionHome() {
    return (
        <Container>
            <ContainerLeft>
                <ContainerText>
                    Darjeeling, the most refined and precious Indian black tea
                </ContainerText>

                <ContainerButton>
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <Button>View products</Button>
                    </Link>
                </ContainerButton>
            </ContainerLeft>
            <ContainerRight>
                <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </ContainerRight>
        </Container>
    );
}

export default CollectionHome;
