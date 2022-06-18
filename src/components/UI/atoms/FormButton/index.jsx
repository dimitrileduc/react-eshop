import React from "react";
import {Button} from "./styles";

function FormButton({name}) {
    return <Button type="submit">{name}</Button>;
}

export default FormButton;
