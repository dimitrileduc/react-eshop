import styled from "styled-components";

export const Input = styled.input`
    width: 99%;
    border: none;
    border-bottom: 1px lightgrey solid;
    padding-bottom: 10px;
    font-size: 14px;

    ::placeholder {
        color: black;
        opacity: 0.6;
    }
    :focus {
        outline: none !important;
        border-bottom: 1.5px black solid;
    }
    :focus::placeholder {
        color: transparent;
    }
`;
