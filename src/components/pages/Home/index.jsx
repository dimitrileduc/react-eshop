import React, {useRef, useEffect, useState} from "react";

import ImageJpg from "../../assets/images/slide7.jpg";
import ImageWebp from "../../assets/images/slide7.webp";
import Marquee from "react-fast-marquee";

import {useScrollData} from "scroll-data-hook";

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

function Home({setIsImageHeaderVisible, setIsCustomCursor, scrollDirection}) {
    ///// Scroll to ref

    const {
        scrolling,
        time,
        speed,
        direction,
        position,
        relativeDistance,
        totalDistance,
    } = useScrollData();

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

    return (
        <>
            <Container>
                <ContainerHeadImage
                    onClick={executeScroll}
                    onMouseEnter={() => setIsCustomCursor(true)}
                    onMouseLeave={() => setIsCustomCursor(false)}>
                    <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
                </ContainerHeadImage>

                <ContainerMain ref={myRef}>
                    <Marquee
                        play={true}
                        speed={40}
                        gradient={false}
                        direction={"left"}>
                        <MainText>
                            Discover our new Darjeeling collection - Discover
                            our new Darjeeling collection Discover our new
                            Darjeeling collection.
                        </MainText>
                    </Marquee>
                    <CollectionHome />
                </ContainerMain>
            </Container>
        </>
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
