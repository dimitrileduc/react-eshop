import React from "react";
import {
    ContainerModal,
    ContainerContent,
    ContainerHeader,
    Title,
    ContainerBody,
    ContainerFooter,
    ContainerTitle,
    ContainerButton,
    Button,
} from "./styles.js";

function Modal({show, onClose, title, content}) {
    if (!show) {
        return null;
    }
    const Form = content;
    return (
        <ContainerModal onClick={onClose}>
            <ContainerContent onClick={(e) => e.stopPropagation()}>
                <ContainerHeader>
                    <ContainerButton>
                        <Button onClick={onClose}>X</Button>
                    </ContainerButton>
                    <ContainerTitle>
                        <Title>{title}</Title>
                    </ContainerTitle>
                </ContainerHeader>

                <ContainerBody>
                    <Form />
                </ContainerBody>
                <ContainerFooter></ContainerFooter>
            </ContainerContent>
        </ContainerModal>
    );
}

export default Modal;
