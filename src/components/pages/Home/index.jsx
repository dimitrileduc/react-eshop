import React, {useRef} from "react";

import ImageJpg from "../../assets/images/slide1.jpg";
import ImageWebp from "../../assets/images/slide1.webp";

import ImageHome from "../../UI/atoms/ImageHome";
import {Container, MainText, MainText2, ContainerMain} from "./styles";

//import useIntersection from "../../utils/useIntersection/useIntersection";
import useOnScreen from "../../utils/useOnScreen";
//import {Parallax, ParallaxBanner} from "react-scroll-parallax";

function Home() {
    const ref = useRef();
    const isVisible = useOnScreen(ref);
    console.log(isVisible + " ? is visible ? ");
    return (
        <Container>
            <div ref={ref}>
                <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </div>

            <ContainerMain>
                <MainText>
                    Our signature Darjeeling tea, The Empress of India is named
                    after Queen Victoria for whom the Victoria Memorial in
                    Calcutta was built.
                </MainText>

                <MainText2>
                    Our signature Darjeeling tea, The Empress of India is named
                    after Queen Victoria for whom the Victoria Memorial in
                    Calcutta was built.
                </MainText2>
            </ContainerMain>
        </Container>
    );
}

export default Home;
