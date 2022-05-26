import styled from "styled-components";
import Image from "react-image-webp";

export const ImageStyled = styled(Image)`
    width: 150px;
`;

export const ContainerImage = styled.div`
    flex-basis: 33.3333%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 680px) {
        flex-basis: 100%;
    }
`;

export const Img = styled.img.attrs((props) => ({
    src: props.src || Img,
}))`
    width: 200px;
`;
