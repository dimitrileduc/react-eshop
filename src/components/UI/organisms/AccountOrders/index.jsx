import React from "react";
import {ContainerMargin, Title, SubText, Status} from "./styles";

function AccountOrders() {
    return (
        <ContainerMargin>
            <Title>Track your order</Title>
            <SubText>
                The carrier will pick up your package at the Warehouse
            </SubText>
            <Status>Status of your order : </Status>
        </ContainerMargin>
    );
}

export default AccountOrders;
