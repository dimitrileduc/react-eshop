import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";

//import svg from "./components/assets/icons/arrow.svg";

import {Auth0Provider} from "@auth0/auth0-react";

//import {CustomCursor} from "react-svg-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-7wxame8p.us.auth0.com"
            clientId="sqqFOx7tq6qjPZ5MmuA6WERT9h3GsDa8"
            redirectUri={window.location.origin}>
            <App />
        </Auth0Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
