import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Router from "./routes/routes";
import "./assets/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="askit.us.auth0.com"
      clientId="bcbgyJq1mMkD7MyK0uhWIXNlrHITZ7wj"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Router />
    </Auth0Provider>
  </React.StrictMode>
);
