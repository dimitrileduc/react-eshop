import styled from "styled-components";

export const ContainerImage = styled.div`
    grid-area: 1 / 1 / 4 / 4;

    @media (max-width: 680px) {
    }
`;

export const Img = styled.img.attrs((props) => ({
    src: props.src || Img,
}))`
    //width: 200px;
    width: 100%;
    //height: 800px;
`;
