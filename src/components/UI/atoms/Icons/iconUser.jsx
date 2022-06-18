import React from "react";

import {ReactComponent as Icon} from "../../../assets/icons/user.svg";
import {Button} from "./styles.js";

import {Link} from "react-router-dom";

function IconUser() {
    const icon = (
        <Icon
            style={{
                width: "24px",
                height: "24px",
                fill: "F5F5F5",
            }}
        />
    );

    return (
        <>
            <Link to="/myaccount">
                <Button>{icon}</Button>
            </Link>
        </>
    );
}

// <Button onClick={() => setUser()}>{icon}</Button>

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

/*
    function setUser() {
        if (!isLoading) {
            if (isAuthenticated === true) {
                logout({returnTo: window.location.origin});
            } else {
                loginWithRedirect();
            }
        }
    }
    */
