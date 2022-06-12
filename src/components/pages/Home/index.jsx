import React, {useRef, useEffect} from "react";

import ImageJpg from "../../assets/images/slide4.jpeg";
import ImageWebp from "../../assets/images/slide4.webp";

import ImageHome from "../../UI/atoms/ImageHome";
import {
    Container,
    MainText,
    MainText2,
    ContainerMain,
    ContainerHeadImage,
} from "./styles";

//import useIntersection from "../../utils/useIntersection/useIntersection";
import useOnScreen from "../../utils/useOnScreen";
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

function Home({setIsImageHeaderVisible}) {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setIsImageHeaderVisible(isVisible);
    }, []);

    return (
        <Container>
            <Parallax translateY={["0px", "0px"]}>
                <div ref={ref}>
                    <ContainerHeadImage>
                        <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
                    </ContainerHeadImage>
                </div>
            </Parallax>
            <Parallax translateY={["0px", "-500px"]}>
                <ContainerMain>
                    <MainText>.....Our signature Darjeeling tea</MainText>

                    <MainText2>
                        Our signature Darjeeling tea, The Empress of India is
                        named after Queen Victoria for whom the Victoria
                        Memorial in Calcutta was built.
                    </MainText2>
                </ContainerMain>
            </Parallax>
        </Container>
    );
}

export default Home;
