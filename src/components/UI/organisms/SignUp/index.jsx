import React from "react";
import {
    Container,
    Title,
    Subtext,
    Form,
    FormContainer,
    EmailContainer,
    PasswordContainer,
    ButtonContainer,
    FirstNameContainer,
    LastNameContainer,
} from "./styles";

import InputForm from "../../atoms/InputForm";
import FormButton from "../../atoms/FormButton";

function SignUp() {
    return (
        <Container>
            <Title>New User</Title>

            <Form>
                <FormContainer>
                    <FirstNameContainer>
                        <InputForm holder={"First Name"} type="text" />
                    </FirstNameContainer>
                    <LastNameContainer>
                        <InputForm holder={"Last Name"} type="text" />
                    </LastNameContainer>
                    <EmailContainer>
                        <InputForm holder={"Email Adress"} type="email" />
                    </EmailContainer>
                    <PasswordContainer>
                        <InputForm holder={"Password"} type="password" />
                    </PasswordContainer>
                    <ButtonContainer>
                        <FormButton name="Sign Up" />
                    </ButtonContainer>
                </FormContainer>
            </Form>
        </Container>
    );
}

export default SignUp;
