import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {ReactComponent as Icon} from "../../../assets/icons/user.svg";
import {Button} from "./styles.js";

function IconUser() {
    const {loginWithRedirect} = useAuth0();
    const {logout} = useAuth0();

    return (
        <>
            <Button onClick={() => loginWithRedirect()}>
                <Icon
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                />
            </Button>
            <Button onClick={() => logout({returnTo: window.location.origin})}>
                <Icon
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                />
            </Button>
        </>
    );
}

export default IconUser;
/*
const {isLogin, setIsLogin} = useState(false);
    const {loginWithRedirect} = useAuth0();
    const {logout} = useAuth0();

    function log() {
        
        if (isLogin) {
            logout({returnTo: window.location.origin});
            setIsLogin(false);
        } else {
            loginWithRedirect();
            setIsLogin(true);
        }
    }
    */
