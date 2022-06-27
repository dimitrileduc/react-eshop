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
    ContainerMarquee,
} from "./styles";

//import useIntersection from "../../utils/useIntersection/useIntersection";
import useOnScreen from "../../utils/useOnScreen";
import {Parallax, ParallaxBanner} from "react-scroll-parallax";

import CollectionHome from "../../UI/molecules/CollectionHome";
import BannerHome from "../../UI/molecules/BannerHome";
import BannerProducts from "../../UI/molecules/BannerProducts";

import {motion} from "framer-motion";

import TransitionExit from "../../transitions/TransitionExit";

function Home({setIsCustomCursor, productsItems, delayMaquee}) {
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
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
                    <ContainerMain ref={myRef}>
                        <CollectionHome />
                        <BannerHome />

                        <BannerProducts productsItems={productsItems} />
                        <ContainerMarquee>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    delay: delayMaquee,
                                    duration: 1,
                                }}>
                                <Marquee
                                    play={true}
                                    speed={40}
                                    gradient={false}
                                    direction={"left"}>
                                    <MainText>
                                        Discover our new Darjeeling collection -
                                        Discover our new Darjeeling collection -
                                        Discover our new Darjeeling collection -
                                        Discover our new Darjeeling collection -
                                        Discover our new Darjeeling collection -
                                    </MainText>
                                </Marquee>
                            </motion.div>
                        </ContainerMarquee>
                    </ContainerMain>
                </motion.div>
            </Container>
        </>
    );
}

export default Home;

/*
<ContainerHeadImage
                    onClick={executeScroll}
                    onMouseEnter={() => setIsCustomCursor(false)}
                    onMouseLeave={() => setIsCustomCursor(false)}>
                    <ImageHome imageJpg={ImageJpg} imageWebp={ImageWebp} />
                </ContainerHeadImage>
                */

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
