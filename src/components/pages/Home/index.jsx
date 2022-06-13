import React, {useRef, useEffect} from "react";

import ImageJpg from "../../assets/images/slide7.jpg";
import ImageWebp from "../../assets/images/slide7.webp";

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

import CollectionHome from "../../UI/molecules/CollectionHome";

function Home({setIsImageHeaderVisible}) {
    ///// Scroll to ref
    function scrollToRef(ref) {
        let offsetBottom = ref.current.offsetTop;
        console.log("scroll to ref");

        window.scrollTo({
            top: offsetBottom,
            left: 0,
            behavior: "smooth",
        });
    }

    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    ////

    return (
        <Container>
            <ContainerHeadImage onClick={executeScroll}>
                <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
            </ContainerHeadImage>

            <ContainerMain>
                <MainText ref={myRef}>
                    Discover our new Darjeeling collection !
                </MainText>
                <CollectionHome />
            </ContainerMain>
        </Container>
    );
}

export default Home;

/*
 function scrollToRef(ref) {
        let offsetBottom = ref.current.offsetTop + ref.current.offsetHeight;
        console.log("scroll to ref");

        window.scrollTo({
            top: offsetBottom,
            left: 0,
            behavior: "smooth",
        });
    }

    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    */
