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
} from "./styles";

import InputForm from "../../atoms/InputForm";
import FormButton from "../../atoms/FormButton";

function SignIn() {
    return (
        <Container>
            <Title>Sign In</Title>
            <Subtext>
                Sign in for quick reordering or to edit your subscription.
            </Subtext>
            <Form>
                <FormContainer>
                    <EmailContainer>
                        <InputForm holder={"Email Adress"} type="email" />
                    </EmailContainer>
                    <PasswordContainer>
                        <InputForm holder={"Password"} type="password" />
                    </PasswordContainer>
                    <ButtonContainer>
                        <FormButton name="Sign In" />
                    </ButtonContainer>
                </FormContainer>
            </Form>
        </Container>
    );
}

export default SignIn;
