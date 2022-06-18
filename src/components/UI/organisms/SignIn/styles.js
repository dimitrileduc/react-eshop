import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //border: 1px blue dashed;
    align-items: center;
    margin: 20px;
`;

export const Title = styled.h4`
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
`;

export const Subtext = styled.p`
    text-align: center;
    font-size: 14px;
`;

export const Form = styled.div`
    width: 100%;
`;

export const FormContainer = styled.form`
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    row-gap: 20px;
    grid-template-areas:
        "EmailContainer"
        "PasswordContainer"
        "ButtonContainer";
`;

export const EmailContainer = styled.div`
    justify-self: stretch;
    grid-area: EmailContainer;
    width: 100%;
`;

export const PasswordContainer = styled.div`
    justify-self: stretch;
    grid-area: PasswordContainer;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    justify-self: stretch;
    grid-area: ButtonContainer;
    width: 100%;
`;
