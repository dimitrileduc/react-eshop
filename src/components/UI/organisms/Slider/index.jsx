import React from "react";
import {ContainerSlider} from "./styles";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

import "./styles.css";
import {ContainerSlide, SliderBox, H1, P} from "./styles.js";

import ButtonSlide from "../../atoms/ButtonSlide";

import ImageJpg from "../../../assets/images/slide1.jpg";
import ImageWebp from "../../../assets/images/slide1.webp";

import Image from "../../atoms/Image";

// import required modules
import {Autoplay, Navigation} from "swiper";

function Slider() {
    return (
        <>
            <ContainerSlider>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={{
                        margin: "0 auto !important",
                    }}>
                    <SwiperSlide>
                        <ContainerSlide>
                            <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
                            <SliderBox>
                                <H1>KEEP IT SIMPLE</H1>
                                <P>
                                    Mirra promotes optimum skin performance via
                                    minimalist regimens.
                                </P>
                                <ButtonSlide />
                            </SliderBox>
                        </ContainerSlide>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </ContainerSlider>
        </>
    );
    /*
    return (
        <ContainerSlider>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                style={{
                    margin: "0 auto !important",
                }}>
                <SwiperSlide>
                    <ContainerSlide>
                        <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
                        <SliderBox>
                            <H1>KEEP IT SIMPLE</H1>
                            <P>
                                Mirra promotes optimum skin performance via
                                minimalist regimens.
                            </P>
                            <Button>Shop All</Button>
                        </SliderBox>
                    </ContainerSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image imageJpg={ImageJpg} imageWebp={ImageWebp} />
                </SwiperSlide>
            </Swiper>
        </ContainerSlider>
    );
    */
}

export default Slider;
