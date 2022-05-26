import styled from "styled-components";

export const ContainerSlide = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
`;

export const SliderBox = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: 1 / 1 / 4 / 4;
    background-color: white;
`;

export const H1 = styled.h1`
    margin-left: 20px;
    margin-right: 20px;
    white-space: pre;
    overflow: visible;
    font-weight: 700;
    font-family: "Inter-Bold", "Inter", sans-serif;
    color: #000000;
    font-size: 48px;
    letter-spacing: -2.6px;
    line-height: 0.5;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0;

    @media (max-width: 680px) {
        font-size: 14px;
        letter-spacing: 0px;
    }
`;

export const P = styled.p`
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;

    opacity: 0.8;
    font-family: "Inter", sans-serif;
    color: #000000;
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 1.6;
    text-align: center;
    overflow: hidden;
    margin-left: 20px;
    margin-right: 20px;
    @media (max-width: 680px) {
        display: none;
    }
`;

export const ContainerSlider = styled.div`
    /*
    width: calc(100% - 80px);
    display: flex;
    align-items: center;
    justify-content: center;*/
`;
